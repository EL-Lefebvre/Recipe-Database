"use strict";
require("dotenv").config();

const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = 8000;

const { getRandomRecipes, singleRecipe, searchRecipe } = require("./handlers");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/"));
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.send("Port 8000 working");
});

app.get("/recipes/random", getRandomRecipes);
app.get("/recipes/:id", singleRecipe);
app.get("/recipes/search/:food", searchRecipe);
searchRecipe
app.listen(port, () => {
  console.log("listening on port 8000");
});
