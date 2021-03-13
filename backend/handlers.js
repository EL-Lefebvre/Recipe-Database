require("dotenv").config();
const { MongoClient } = require("mongodb");
// const mongoose = require("mongoose");
const { MONGO_URI } = process.env;
const apiKey = process.env.API_KEY;
const api_url = "https://api.spoonacular.com/recipes";
const fetch = require("isomorphic-fetch");
const options = {
  method: "GET",
  headers: {
    apiKey: `${apiKey}`,
    "Content-Type": "application/json",
  },
};
console.log(require("dotenv").config({ MONGO_URI }));
console.log(MONGO_URI);
// Get 10 random recipes
const getRandomRecipes = async (req, res) => {
  const response = await fetch(
    `${api_url}/random?apiKey=${apiKey}&number=5&tags=vegetarian,dinner`,
    options
  );
  const data = await response.json();

  res.status(200).json({ status: 200, data });
};

//Search recipes by ingredients

//Get single Recipe information (ingredients/nurtition/diet)
const singleRecipe = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const response = await fetch(
    `${api_url}/${id}/information?apiKey=${apiKey}&includeNutrition=true`,
    options
  );
  const data = await response.json();

  res.status(200).json({ status: 200, data });
};

//Search recipe by ingredients
const searchRecipe = async (req, res) => {
  const food = req.params.food;
  console.log(food);
  const response = await fetch(
    `${api_url}/complexSearch/?apiKey=${apiKey}&query=${food}`,
    options
  );
  const data = await response.json();

  res.status(200).json({ status: 200, data });
};

//Get similar recipes as a particular one

//Wine pairing with recipe

//Post your own recipe

const recipePosting = async (req, res) => {
  const client = await MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    const addingNewUser = async (dbName) => {
      await client.connect();
      console.log("connected");
      const db = await client.db(dbName);
      const data = await db
        .collection("postedRecipes")
        .insertOne({ name: "Tom Adams" });

      console.log("close");
      return db;
    };
    const addedUser = await addingNewUser("recipes");

    res.status(201).json({ status: 201, addedUser });
  } catch (err) {
    res.status(500).json({ status: 500, message: "error mongodb" });
  }
  client.close();
};

module.exports = {
  getRandomRecipes,
  singleRecipe,
  searchRecipe,
  recipePosting,
};
