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
const cors = require('cors');
app.use(cors());
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');
const port = 3000;
const secret = 'SE3316 Secret Token'
//================= Defining Models ===================================
const User = require("./models/users.js");
const Schedule = require("./models/schedules.js");

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


app.use(require("express-session")({
    secret: "Mayank Sood Testing...",
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403)
    }
}





//============ ROUTES for Unauthenticated Users =================

//Setting up GET route for /api/open/courses
router.get('/open/courses', (req,res)=>{
    res.send(data);
});

//Setting up POST route to allow for a User to Register
router.post('/register', (req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        let users = new User(
            {
                username: req.body.username,
                email: req.body.email,
                password: hash,
                active: false,
                deactive: true,
                authenticationCode: randomCode.generate(5),
                admin: false,
            }
        );
        if(req.body.username==null || req.body.username=="" || req.body.password==null || req.body.password=="" || req.body.email == null || req.body.email=="")
        {
            res.json({success:false,message:'Ensure username, email and password fields are filled out.'});
        }
        else{
            users.save(function (err, users) {
                if (err) {
                    return next(err);
                }
               
                sendConfirm(req.body.email,req.body.username);
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
    User.findOne({ email: email}, function(err, foundUser){
        if(err){
            return res.send(err);
        }
        if(foundUser===null){
            return res.send("Email does not exist! ");
        }
        else{
            let checkPassword = bcrypt.compareSync(password, foundUser.password);
            if(checkPassword==true){
               let token = jwt.sign({email:email},secret,{expiresIn:'1m'});
               return res.json({success:true, message:"User Authenticated", token:token, expiresIn:token.expiresIn})
            }
                else{
                    return res.send('Incorrect password. Please try again!');
                }
        }
    })
});

//===============ROUTES for Authenticated Users===============================//
//Retrieving all Schedules from the Database
router.get("/secure/schedule", (req, res) => {
    Schedule.find({}, 'scheduleName subject_schedule courseNumber_schedule', function(err, schedule){
      if(err) {
        return console.error(err);
      }
      else{
        res.send(JSON.stringify(schedule));
      }
  }); ``
  
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
  router.post("/secure/schedule", (req, res, next) => {
  
    let subjects_data = [];
    let courseNums_data = [];
  
  
    for (let i = 0; i < data.length; i++) {
      subjects_data.push(data[i].subject);
      courseNums_data.push(data[i].catalog_nbr);
    }
  
    let schedule = new Schedule({
      scheduleName:req.body.scheduleName,
      subject_schedule: req.body.subject_schedule
    });
  
    console.log(req.body.subject_schedule);
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
          console.log(req.body.scheduleName);
        
          }
      });
    }     
  });
  
  //Creating a Put request to update the Schedule by its Name.
  app.put('/secure/schedule/:sched_name', function(req,res,next){
  
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
  app.delete('/secure/schedule', (req,res,next)=> {
    Schedule.deleteMany({}).then(function(schedule){
    res.send(schedule);
      });
   });
  
  //Path to Delete Schedule by a Given Name
  app.delete('/secure/schedule/:sched_name', (req,res,next)=> {
  
      Schedule.findOneAndDelete({scheduleName:req.params.sched_name}).then(function(schedule){
        res.send(schedule);
          }); 
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
  