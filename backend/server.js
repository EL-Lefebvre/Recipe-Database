const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const port = 8000;
const { getRandomRecipe } = require('./handlers')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Port 8000 working");
});

app.get("/recipes/random", getRandomRecipe);

app.listen(port, () => {
  console.log("listening on port 8000");
});
