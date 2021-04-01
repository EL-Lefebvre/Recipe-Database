const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const User = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { collection: "authentification" }
);

module.exports = mongoose.model("User", User);
