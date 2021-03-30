const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const User = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { collection: "test" }
);

module.exports = mongoose.model("User", User);
