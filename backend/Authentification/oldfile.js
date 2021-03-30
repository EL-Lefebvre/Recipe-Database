// "use strict";
// require("dotenv").config();

// const {
//   getRandomRecipes,
//   singleRecipe,
//   searchRecipe,
//   newPost,
//   filterRecipe,
// } = require("./handlers");
// const { MONGO_CONNECT } = process.env;

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };
// const mongoose = require("mongoose");
// const User = require("./Passport");
// const passport = require("passport");
// const passPortLocal = require("passport-local").Strategy;
// const LocalStrategy = require("passport-local");
// const cookieParser = require("cookie-parser");
// const bcrypt = require("bcryptjs");
// const expressSession = require("express-session");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");

// const PORT = process.env.PORT || 8000;

// const app = express();
// mongoose
//   .connect(MONGO_CONNECT, options)
//   .then(() => {
//     console.log("Connected to Database");
//   })
//   .catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
//   });

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use("/", express.static(__dirname + "/"));
// app.use(morgan("tiny"));
// app.use(express.static("public"));
// app.use(
//   require("express-session")({
//     secret: "hello world",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.get("/", (req, res) => {
//   res.send("Port 8000 working");
// });
// app.get("/confirmation", isLoggedIn, (req, res) => {
//   res.send("confirmation");
// });
// app.get("/register", (req, res) => {
//   res.send("register");
// });

// handling user sign up
// app.post("/register", (req, res) => {
//   User.register(
//     new User({ username: req.body.username }),
//     req.body.password,
//     function (err, user) {
//       if (err) {
//         console.log(err);
//         return res.redirect("/error");
//       } //user stragety
//       console.log(req.user);

//       passport.authenticate("local")(req, res, function () {
//         res.save(req.body.username);
//         res.redirect("/confirmation"); //once the user sign up
//       });
//     }
//   );
// });

// Login Routes

// app.get("/login", (req, res) => {
//   res.send(req.User);
// });

// middleware
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/confirmation",
//     failureRedirect: "/login",
//   }),
//   function (req, res) {
//     res.send("User is " + req.User.id);
//   }
// );

// app.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     res.redirect("/profile");
//     return next();
//   } else {
//     res.redirect("/login");
//   }
// }
// app.post("/recipes/post", newPost);
// app.get("/recipes/random", getRandomRecipes);
// app.get("/recipes/:id", singleRecipe);
// app.get("/recipes/search/:food", searchRecipe);
// app.get("/recipes", filterRecipe).listen(PORT, () => {
//   console.log("listening on port 8000");
// });
