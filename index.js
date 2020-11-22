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
mongoose.connect("mongodb://localhost/authenticationdb");
mongoose.Promise = global.Promise;
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




app.use("/api", router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  