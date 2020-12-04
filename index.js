//============ Defining Required Packages =================
const express = require("express");
const app = express();
app.use("/", express.static("static"));
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const fs = require("fs");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/authentication");
mongoose.Promise = global.Promise;
var randomCode = require("randomstring");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const stringSimilarity = require('string-similarity');
const striptags = require('striptags');
const rateLimit = require("express-rate-limit");
const cors = require('cors');
app.use(cors());
const passport = require('passport');
const session = require('express-session');
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const port = (process.env.port || 3000);
const secret = 'SE3316 Secret Token'
let verificationLink;
let host;
let authenticationCode;
let currentUser;
let currentAdmin;
//================= Defining Models ===================================
const User = require("./models/users.js");
const Schedule = require("./models/schedules.js");
const Review = require("./models/reviews.js");
const Policy = require("./models/policy.js");

//============ Parsing Courses Timetable Data File ===================
fs.readFile("./Lab3-timetable-data.json", "utf-8", (err, jsonString) => {
    try {
      data = JSON.parse(jsonString);
    } catch (err) {
      console.log("Error Parsing JSON ", err);
    }
  });

  //Middleware for logging all Requests made to the Server
app.use((req, res, next) => {
console.log(`${req.method} request for ${req.url}`);
next();
  });


  //Middleware for Passport
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Limiting only 20 Schedules to be Created by one user.
const createScheduleLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute window
    max: 20, // start blocking after 5 requests
    message:
      "Too many schedules created from this IP, please try again after 15 minutes "
  });

//Function to verify the JWT Token assigned to users.
const checkToken = (req, res, next) => {
    let token;
    if ('authorization' in req.headers)
        token = req.headers['authorization'].split(' ')[1];
    if (!token)
        return res.status(403).send({ auth: false, message: 'No token provided.' });
    else {
        jwt.verify(token, secret,
            (err, decoded) => {
                if (err)
                    return res.status(500).send({ auth: false, message: 'Token authentication failed.' });
                else {
                    req.email = decoded.email;
                    next();
                }
            }
        )
    }
}

//============ ROUTES for Unauthenticated Users =================

//Setting up GET route for /api/open/courses
router.get('/open/courses', (req,res)=>{
    res.send(data);
});

//Setting up GET route for /api/open/coursesId
router.get('/open/courseId', (req,res)=>{
    let test=[];
   for(let i=0; i<data.length; i++){
    test.push(data[i].subject);
    test.push(data[i].catalog_nbr);
   }
   const courseId = Array.from({length:test.length/2}, (_,i)=>test[2*i] + " " + test[2*i+1]);
    res.send(courseId);
});

//Setting up GET route for /api/open/course/:key
router.get('/open/course/:key', (req,res)=>{

    let key = data.filter((c) => 
    (c.catalog_nbr + " " + c.className).indexOf(req.params.key.replace(/\s/g, '').toUpperCase())!=-1);

    if(key.length>0){ 
  
    res.send(key);
   }

   else{
    res.status(400).send("No courses were found!");
   }
});


//Setting up the route for getting all the reviews:
router.get('/open/allReviews', (req,res)=>{
    Review.find({hidden:false}, 'title courseId rating comment createdBy createdAt', function(err, review){
        if(err) {
          return console.error(err);
        }
        else{
          res.send(JSON.stringify(review));
        }
    }); 
});


//Setting up the GET route to retrieve all Public Schedules
router.get('/open/publicSchedules', (req,res)=>{
    Schedule.find({visibility:'public'}).sort({updatedAt:'descending'}).exec(function(err, schedule){
        if(err) {
          return console.error(err);
        }
        else{
         res.send(JSON.stringify(schedule));
        }
    }); 
});


//Setting up POST route to allow for a User to Register
router.post('/register', (req,res,next)=>{
    let name = req.body.name;
    let username = req.body.username;
    let newEmail = req.body.email;
    let active = false;
  
    if(newEmail==""){
        return res.send({message:"Invalid Email."})
    }
    let password = req.body.password;
        
    if (password == ""){
        return res.send({message: "Please enter a valid password"});
    }
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    authenticationCode = randomCode.generate(5);

    let users = new User({
        name:striptags(name),
        username:striptags(username),
        email:striptags(newEmail),
        password:hash,
        active:active,
        deactive:false,
        authenticationCode:authenticationCode,
        admin:false
    });

    User.find({'email':newEmail}, function (err, account){
        if(account[0]==null){
            users.save(function(err){
                if (err){
                    res.send(err);
                }
                let didSendEmail = sendConfirm(req.body.email,req.body.name, req.get('host'));
                if(didSendEmail){
        res.json({message: "Account has successfully been created", authenticationCode: authenticationCode});
                }
                else{
                    res.json({message: "An account with this email has already been registered."}); 
                }
            });
       
        }
        else{
            res.send({message:"An account with this email already exists!"});
        }
    });

});

//Setting up POST route to allow for a User to LogIn
router.post('/login', (req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email: email}, function(err, foundUser){
        if(err){
            return res.send(err);
        }
        if(foundUser===null){
            return res.json({message: "Email does not exist!"});
        }

        let checkPassword = bcrypt.compareSync(password, foundUser.password);
        if(!checkPassword){
            return res.json({message: 'Incorrect password. Please try again!'});
        }
        else{
            let active = foundUser.active;
            let deactive = foundUser.deactive;
            let admin = foundUser.admin;

            if(deactive){return res.json({message: "User disabled", username: foundUser.username})}
            else if(!active){
                return res.json({message: "The account is not yet verified!", username:foundUser.username});
            }
            else{
                currentUser=foundUser.username;
                currentAdmin=foundUser.admin;
               let token = jwt.sign({email:email},secret,{expiresIn:'30m'});
               return res.json({success:true, message:"User Authenticated", token:token, expiresIn:token.expiresIn, username:foundUser.username, admin:foundUser.admin})
            }
        }
    })
});

//===============ROUTES for Authenticated Users===============================//

//Retrieving all Users from the Database that are not administrators
router.get("/secure/users", (req, res) => {
    User.find({}, 'name username admin deactive', function(err, user){
      if(err) {
        return console.error(err);
      }
      else{

        if(currentAdmin==false){
            res.send({message:"You are not an administrator!"});
        }
        else{
            res.send(JSON.stringify(user));
        }
       
      }
  }); 
  });

  //Sending the name and username to display after a User Logs In
router.get('/secure/user-detail', checkToken, (req,res,next)=>{
    User.findOne({email: req.email},
        (err, user) => {
            if (!user){
                return res.status(404).json({ status: false, message: 'User record not found.' });
            }
            else
                return res.status(200).json({ status: true, user : _.pick(user,['name','username'])});
        }
    );
});

//Route to get user by their username.
router.get("/secure/user/:username", (req, res) => {
  
    User.findOne({username: req.params.username}, function(err, user){
      if(err) {
        console.error(err);
        res.status(400).send(`User ${req.params.username} was not found!`);
      }
      else{
        res.send(JSON.stringify(user));
      }
    });
  });

 //Route to edit the User Privilege for A User based on his/her username 
router.put('/secure/user/:username', checkToken, function(req,res,next){

    if(currentAdmin==false){
        res.send({message:"You are not an administrator!"});
    }

    if(!req.body.admin){
      res.status(400).send("Invalid! Choose true or false to let user be admin or not.");
    }
   
    if(!req.body.deactive){
        res.status(400).send("Invalid! Choose true or false to deactivate user account!");
    }

  else{
    User.findOneAndUpdate({username: req.params.username},req.body).then(function(){
      User.findOne({username: req.params.username}).then(function(user){
        res.send(user);
      });
    });
  }
  });

  //Route to retrieve all Reviews Submitted by Users for Admins to mark hidden or not
  router.get("/secure/reviews", (req, res) => {
    Review.find({}, 'title comment rating courseId hidden createdBy', function(err, review){
      if(err) {
        return console.error(err);
      }

      else if(currentAdmin==false){
          res.send({message:"You are not an administrator!"});
      }

      else{
        res.send(JSON.stringify(review));
      }
  }); 
  });

  //Route to find a review using its title.
  router.get("/secure/review/:title", (req, res) => {
  
    Review.findOne({title: req.params.title}, function(err, review){
      if(err) {
        console.error(err);
        res.status(400).send(`Review ${req.params.title} was not found!`);
      }
      else{
        res.send(JSON.stringify(review));
      }
    });
  });

  router.put('/secure/review/:title', checkToken, function(req,res,next){
    
    if(!req.body.hidden){
        res.status(400).send("Invalid! Choose true if you want to hide review or false if you want to show review.");
    }
  else{
    Review.findOneAndUpdate({title: req.params.title},req.body).then(function(){
      Review.findOne({title: req.params.title}).then(function(review){
        res.send(review);
      });
    });
  }
  });



//Retrieving all Schedules from the Database
router.get("/secure/schedule", (req, res) => {

    Schedule.find({createdBy:currentUser}, 'scheduleName scheduleDescription subject_schedule courseNumber_schedule', function(err, schedule){
      if(err) {
        return console.error(err);
      }
      else{
        res.send(JSON.stringify(schedule));
      }
  }); 
  
  });
  
  //Retrieving Schedules based on their Name from the Database
  router.get("/secure/schedule/:sched_name", (req, res) => {
  
    Schedule.findOne({scheduleName: req.params.sched_name}, function(err, schedule){
      if(err) {
        console.error(err);
        res.status(400).send(`Schedule ${req.params.sched_name} was not found!`);
      }
      else{
        res.send(JSON.stringify(schedule));
      }
    });
  });
  
  //Post request to make a new Schedule and add it to the Database.
  router.post("/secure/schedule", checkToken, createScheduleLimiter, (req, res, next) => {
  
    let subjects_data = [];
    let courseNums_data = [];
  
  
    for (let i = 0; i < data.length; i++) {
      subjects_data.push(data[i].subject);
      courseNums_data.push(data[i].catalog_nbr);
    }
  
    let schedule = new Schedule({
      visibility:req.body.visibility,
      scheduleName:striptags(req.body.scheduleName),
      scheduleDescription:req.body.scheduleDescription,
      subject_schedule: req.body.subject_schedule,
      createdBy:req.body.createdBy
    });
    
    let onlysubjects = [];
    let onlyCourseNumber=[];
    for(let i=0; i<req.body.subject_schedule.length; i++){
      if(i%2==0){
       onlysubjects.push(req.body.subject_schedule[i]);
      }
      else{
        onlyCourseNumber.push(req.body.subject_schedule[i]);
      }
    }
  
  let onlysubjectsLength = onlysubjects.map(function(word){
      return word.length
     });

     function subjectsLength(){
       for(let i=0; i<onlysubjectsLength; i++){
         if(onlysubjectsLength[i]>=8){
           return true;
         }
       }
       return false;
     }
   
  
    let matchingSubjectResult = onlysubjects.every(function(val){
      return subjects_data.indexOf(val)>=0;
    })
   
    console.log(req.body.scheduleName);
    console.log(req.body.subject_schedule);
  
    if(!req.body.scheduleName){
      res.status(400).send("Schedule Name is required");
    }
    if(req.body.scheduleName.length>16){
      res.status(400).send("Schedule Name is too long.");
    }
    if(matchingSubjectResult==false){
      res.status(400).send("Invalid Subject");
    }
  
    if(subjectsLength()==true){
      res.status(400).send("Subject Length is too long");
    }
  
    else{
      schedule.save(function (err) {
        if (err) {
              console.error(err.message);
              res.send(err.message);
            }
        else{
          res.send(req.body);
          console.log('Schedule Created Sucessfully');
          }
      });
    }     
  });
  
  //Creating a Put request to update the Schedule by its Name.
  router.put('/secure/schedule/:sched_name', checkToken, function(req,res,next){
  
    let subjects_data = [];
    let courseNums_data = [];
  
  
    for (let i = 0; i < data.length; i++) {
      subjects_data.push(data[i].subject);
      courseNums_data.push(data[i].catalog_nbr);
    }
  
      let onlysubjects = [];
    for(let i=0; i<req.body.subject_schedule.length; i++){
      if(i%2==0){
       onlysubjects.push(req.body.subject_schedule[i]);
      }
    }
   
    function checkString() {
      for(let i=0; i<onlysubjects.length; i++){
        if(typeof onlysubjects[i] != "string") {
           return false;
         }
      }
      return true;
     }
  
  
   let matchingSubjectResult = onlysubjects.every(function(val){
     return subjects_data.indexOf(val)>=0;
   })
   console.log(matchingSubjectResult);
    
    if(!req.body.scheduleName){
      res.status(400).send("Schedule Name is required.");
    }
    if(req.body.scheduleName.length>16){
      res.status(400).send("Schedule Name is too long.");
    }
  
    if(matchingSubjectResult==false){
      res.status(400).send("Invalid Subject Entered. This subject is not offered at Western University");
    }
  
    if(checkString()==false){
  
    }
  
  else{
    Schedule.findOneAndUpdate({scheduleName: req.params.sched_name},req.body).then(function(){
      Schedule.findOne({scheduleName: req.params.sched_name}).then(function(schedule){
        res.send(schedule);
      });
    });
  }
  
  });
  
  //Path to delete all Schedules
  router.delete('/secure/schedule', checkToken, (req,res,next)=> {
    Schedule.deleteMany({}).then(function(schedule){
    res.send(schedule);
      });
   });
  
  //Path to Delete Schedule by a Given Name
  router.delete('/secure/schedule/:sched_name', checkToken, (req,res,next)=> {
  
      Schedule.findOneAndDelete({scheduleName:req.params.sched_name}).then(function(schedule){
        res.send(schedule);
          }); 
    });


    //Setting up a Path to add a new Review to the Database
    router.post("/secure/review", checkToken, (req, res, next) => {

        let review = new Review({
            title:striptags(req.body.title),
            courseId:striptags(req.body.courseId),
            rating: striptags(req.body.rating),
            comment:req.body.comment,
            hidden:false,
            createdBy:req.body.createdBy,
            infringing:false
          });

          if(!req.body.title){
            res.status(400).send("Rating Title is required");
          }
          if(req.body.title.length>16){
            res.status(400).send("Titleis too long.");
          }

          if(!req.body.courseId){
            res.status(400).send("The course you want to review is required");
          }

          if(!req.body.rating){
            res.status(400).send("Rating is required.");
          }

          if(!req.body.comment){
            res.status(400).send("Some comments are required.");
          }
        
          else{
            review.save(function (err) {
              if (err) {
                    console.error(err.message);
                    res.send(err.message);
                  }
              else{
                res.send(req.body);
                console.log('Review Created Sucessfully');
                }
            });
          }    
    });


router.get('/policy', (req,res)=>{
    Policy.find(function (err, policies) {  
        if (err) {
            res.send(err);
        }
        res.send(policies);
    });
});

router.post('/policy', (req,res)=>{
    policy = new Policy();
        policy.policyOne = striptags(req.body.policyOne);
        policy.policyTwo = req.body.policyTwo;
        policy.policyThree = req.body.policyThree;
        policy.save(function (err, policy) {
            if(err){
                res.send(err)
            }
            res.json({message:"Successly Created Policy", policy:policy})
        })
})

router.put('/policy/:policy_id', (req,res)=>{
    let policy1 = req.body.policyOne;
    let policy2 = req.body.policyTwo;
    let policy3 = req.body.policyThree;
    Policy.findById(req.params.policy_id, function (err, policy) {
        if (err)
            res.send(err);

        policy.policyOne = policy1;
        policy.policyTwo = policy2;
        policy.policyThree = policy3;

        policy.save(function (err) {
            if (err)
                res.send(err)
            res.json({ message: 'Policies Saved' });
        });
    });
})

router.put('/secure/changePassword/:username', checkToken, (req,res)=>{
    let password = req.body.password;
    console.log(password);
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    console.log(hash);
    
    password=hash;
    console.log(" Password is " + password);
    req.body.password = hash;
    console.log(" Request.Boy is " + req.body.password);
    
    if(req.body.password==""){
        res.status(400).send("Password field is empty");
    }
        else{
        User.findOneAndUpdate({username: req.params.username},req.body).then(function(){
          User.findOne({username: req.params.username}).then(function(foundUser){
            res.send(foundUser);
          });
        });
    }
      
});
  

//============ Using Nodemailer for Verification Email =================//
let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: { 
        user: "westerntimetableapp@gmail.com", 
        pass: "password123456*" 
    },
    tls:{
        rejectUnauthorized:false
    } 
});

function sendConfirm(clientEmail, clientName, host){
    verificationLink = "http://"+host+"/api/verify/"+authenticationCode;

    let mailOptions = { 
        from: 'westerntimetableapp@gmail.com', 
        to: clientEmail, 
        subject: 'Western Timetable App Account Verification', 
        html: `Hello ${clientName}. Please click on the link below to verify your email address:  ${verificationLink}`, 
    };
    
    transporter.sendMail(mailOptions, function (err,data) {
        if (err) 
        { 
           console.log("An Error occured", err);
        }
       else{
           console.log('An email has been sent!');
       }
      });
}

router.get('/verify/:id', (req,res)=>{
    User.findOne({authenticationCode: req.params.id}, function (err, foundObject){
        if (foundObject != null){
             foundObject.active = true;
                    foundObject.save(function(err, updatedObject){
                       if (err){
                           console.log(err);
                       } 
                       if (updatedObject){
                          return res.end("<h1>Your Email is not verified and you may login!</h1>");
                       }
                    });
        } else {
            res.status(404).send();
             console.log("Email is not verified");
        res.end("<h1>Bad Request</h1>");
        }
    })
});

//===============================================================================//

app.use("/api", router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  