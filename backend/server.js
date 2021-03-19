"use strict";
require("dotenv").config();

const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;

const {
  getRandomRecipes,
  singleRecipe,
  searchRecipe,
  newPost,
  filterRecipe,
} = require("./handlers");
express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use("/", express.static(__dirname + "/"))
  .use(morgan("tiny"))
  .use(express.static("public"))

  .get("/", (req, res) => {
    res.send("Port 8000 working");
  })
  .post("/recipes/post", newPost)
  .get("/recipes/random", getRandomRecipes)
  .get("/recipes/:id", singleRecipe)
  .get("/recipes/search/:food", searchRecipe)
  .get(
    "/recipes/filter/:keyword/:cuisine?/:type?/:diet?/:intolerances?",
    filterRecipe
  )
  .listen(PORT, () => {
    console.log("listening on port 8000");
  });
