"use strict";
require("dotenv").config();
const express = require("express");
const { MONGO_CONNECT } = process.env;
const mongoose = require("mongoose");
const User = require("./User");
const passport = require("passport");
const passPortLocal = require("passport-local").Strategy;
const LocalStrategy = require("passport-local");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 8000;

const {
  getRandomRecipes,
  singleRecipe,
  searchRecipe,
  newPost,
  filterRecipe,
  getPosts,
} = require("./handlers");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();

//----------------[Middleware]-----------------
mongoose
  .connect(MONGO_CONNECT, options)
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/"));
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("sessioncode"));
app.use(passport.initialize());
app.use(passport.session());
require('./Authentification/PassportConfig')(passport);

//----------------------------------------------------


//ROUTES
app.get("/", (req, res) => {
  res.send("Port 8000 working");
});
// app.get("/confirmation", isLoggedIn, (req, res) => {
//   res.send("confirmation");
// });


//handling user sign up
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.redirect("/error");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });

      await newUser.save(function (err, user) {
        console.log("save", err, user);
      });

      res.redirect("/profile");
      console.log(newUser);
      //once the user sign up
    }
  });
});

// Login Routes

app.post("/login", (req, res, next) => {
passport.authenticate('local', (err,user,info)=>{
  if(err) throw err;
  if(!user) res.send('No User Exists')
  else{
    req.logIn(user, err=>{
      if(err) throw err;
      res.redirect("/profile");
      console.log(req.user);
    })
  }
})(req, res, next);
});

app.get("/user", (req, res) => {
res.send(req.user);
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("/recipes/post", getPosts);
app.post("/recipes/post", newPost);
app.get("/recipes/random", getRandomRecipes);
app.get("/recipes/:id", singleRecipe);
app.get("/recipes/search/:food", searchRecipe);

app.get("/recipes", filterRecipe).listen(PORT, () => {
  console.log("listening on port 8000");
});
