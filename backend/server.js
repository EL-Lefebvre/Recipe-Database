require("dotenv").config();

const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const port = 8000;

const { getRandomRecipes, singleRecipe } = require("./handlers");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const fetch = require("isomorphic-fetch");

app.get("/", (req, res) => {
  res.send("Port 8000 working");
});

app.get("/recipes/random", getRandomRecipes);
app.get("/recipes/:id", singleRecipe);

app.listen(port, () => {
  console.log("listening on port 8000");
});
