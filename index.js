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
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require("./models/users.js");
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.connect("mongodb://localhost/authentication");
mongoose.Promise = global.Promise;
const cors = require('cors');
app.use(cors());
var randomCode = require("randomstring");
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const port = 3000;

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

//Setting up route for /api/courses
router.get('/courses', (req,res)=>{
    res.send(data);
});

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
                sendConfirm(req.body.email);
                res.json({message: 'User Added.', users});
            })
        
      });
});

router.post('/login', (req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username: username}, function(err, foundUser){
        if(err){
            return res.send(err);
        }
        if(!foundUser){
            return res.send("User not found");
        }
        else{
            if(bcrypt.compare(password, foundUser.password))
                return res.send(foundUser)
                else{
                    return res.send('Incorrect password');
                }
        }
    })
});

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

function sendConfirm(clientEmail){
    let mailOptions = { 
        from: 'sanchitkumar54323@gmail.com', 
        to: clientEmail, 
        subject: 'Account Verification', 
        text: 'Hello, this is a test for a confirmation email.' 
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




app.use("/api", router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  