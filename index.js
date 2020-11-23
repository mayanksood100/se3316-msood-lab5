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
const port = 3000;

//============ Defining Models =================
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
            users.save(function (err, users) {
                if (err) {
                    return next(err);
                }
                sendConfirm(req.body.email,req.body.username);
                res.json({message: 'User Added.', users});
            })
        
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
            if(checkPassword==true)
                return res.send(foundUser)
                else{
                    return res.send('Incorrect password. Please try again!');
                }
        }
    })
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
  