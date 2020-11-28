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
const rateLimit = require("express-rate-limit");
const cors = require('cors');
app.use(cors());
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const port = 3000;
const secret = 'SE3316 Secret Token'
//================= Defining Models ===================================
const User = require("./models/users.js");
const Schedule = require("./models/schedules.js");
const Review = require("./models/reviews.js");

//============ Parsing Courses Timetable Data File =================
fs.readFile("./Lab3-timetable-data.json", "utf-8", (err, jsonString) => {
    try {
      data = JSON.parse(jsonString);
    } catch (err) {
      console.log("Error Parsing JSON ", err);
    }
  });

app.use((req, res, next) => {
console.log(`${req.method} request for ${req.url}`);
next();
  });

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

//Setting up the GET route to retrieve all Public Schedules
router.get('/open/publicSchedules', (req,res)=>{
    Schedule.find({visibility:'public'}, function(err, schedule){
        if(err) {
          return console.error(err);
        }
        else{
         res.send(JSON.stringify(schedule));
        }
    }); 
});


//Setting up POST route to allow for a User to Register
router.post('/register', (req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        let users = new User(
            {
                name:req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: hash,
                active: false,
                deactive: true,
                authenticationCode: randomCode.generate(5),
                admin: false,
            }
        );
        if(req.body.username==null || req.body.username=="" || req.body.password==null || req.body.password=="" || req.body.email == null || req.body.email=="" || req.body.name==null || req.body.name=="")
        {
            res.json({success:false,message:'Ensure name, username, email and password fields are filled out.'});
        }
        else{
            users.save(function (err, users) {
                if (err) {
                    return next(err);
                }
               
                sendConfirm(req.body.email,req.body.name);
                res.json({success:true, message: 'User Successfuly Registered.'});
            })
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
            return res.send("Email does not exist! ");
        }
        else{
            let checkPassword = bcrypt.compareSync(password, foundUser.password);
            if(checkPassword==true){
               let token = jwt.sign({email:email},secret,{expiresIn:'5m'});
               return res.json({success:true, message:"User Authenticated", token:token, expiresIn:token.expiresIn, username:foundUser.username})
            }
                else{
                    return res.send('Incorrect password. Please try again!');
                }
        }
    })
});

//===============ROUTES for Authenticated Users===============================//

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


//Retrieving all Schedules from the Database
router.get("/secure/schedule", (req, res) => {
    Schedule.find({}, 'scheduleName scheduleDescription subject_schedule courseNumber_schedule', function(err, schedule){
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
      scheduleName:req.body.scheduleName,
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
            title:req.body.title,
            subject:req.body.subject,
            courseNumber:req.body.courseNumber,
            rating: req.body.rating,
            comment:req.body.comment,
            hidden:false
          });

          if(!req.body.title){
            res.status(400).send("Rating Title is required");
          }
          if(req.body.title.length>16){
            res.status(400).send("Titleis too long.");
          }
          if(!req.body.subject){
            res.status(400).send("Subject of the course is required");
          }
        
          if(!req.body.courseNumber){
            res.status(400).send("Course Number is required.");
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
  

//============ Using Nodemailer for Verification Email =================//
let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: { 
        user: "sanchitkumar54323@gmail.com", 
        pass: "mickyrocks" 
    },
    tls:{
        rejectUnauthorized:false
    } 
});

function sendConfirm(clientEmail, clientName){
    let mailOptions = { 
        from: 'sanchitkumar54323@gmail.com', 
        to: clientEmail, 
        subject: 'Western Timetable App Account Verification', 
        text: `Hello ${clientName}. Please click on the link below to verify your email address:` 
    };
    
    transporter.sendMail(mailOptions, function (err,data) {
        if (err) 
        { 
           console.log("An Error occured", err)
        }
       else{
           console.log('An email has been sent!');
       }
      });
}
//===============================================================================//






app.use("/api", router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  