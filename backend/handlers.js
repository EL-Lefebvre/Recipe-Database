require("dotenv").config();
const { MongoClient } = require("mongodb");
const {
  addingRecipe,
  getPostedRecipes,
  getFavorites,
  addFavorite,
  updateFavorite,
} = require("./helpers");

// https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429
const apiKey = process.env.API_KEY;
const api_url = "https://api.spoonacular.com/recipes";
const fetch = require("isomorphic-fetch");
const { update } = require("./User");
const options = {
  method: "GET",
  headers: {
    apiKey: `${apiKey}`,
    "Content-Type": "application/json",
  },
};

// Get 10 random recipes
const getRandomRecipes = async (req, res) => {
  const response = await fetch(
    `${api_url}/random?apiKey=${apiKey}&number=10&tags=dinner`,
    options
  );
  const data = await response.json();

  res.status(200).json({ status: 200, data });
};

//Search recipes by ingredients

//Get single Recipe information (ingredients/nurtition/diet)
const singleRecipe = async (req, res) => {
  const id = req.params.id;

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
  console.log(data);
  res.status(200).json({ status: 200, data });
};

const filterRecipe = async (req, res) => {
  const keyword = req.query.keyword;
  const cuisine = req.query.cuisine;
  const type = req.query.type;
  const diet = req.query.diet;
  const intolerances = req.query.intolerances;

  const response = await fetch(
    `${api_url}/complexSearch/?apiKey=${apiKey}&query=${keyword}&number=20&cuisine=${cuisine}&type=${type}&diet=${diet}&intolerances=${intolerances}`,
    options
  );
  const data = await response.json();

  res.status(200).json({ status: 200, data });
};
//Get similar recipes as a particular one

//Wine pairing with recipe

//Post your own recipe

const newPost = async (req, res) => {
  await addingRecipe(req, res);
};
const getUserFavorites = async (req, res) => {
  await getFavorites(req, res);
};
const newFavorite = async (req, res) => {
  await addFavorite(req, res);
};
const newFavoriteUpdate = async (req, res) => {
  await updateFavorite(req, res);
};
const getPosts = async (req, res) => {
  await getPostedRecipes(req, res);
};
const infoBulk = async (req, res) => {
  const ids = req.params.ids;
  const api_url = "https://api.spoonacular.com/recipes";
  const response = await fetch(
    `${api_url}/informationBulk?apiKey=${apiKey}&ids=${ids}`,
    options
  );
  const data = await response.json();
  console.log(data);
  res.status(200).json({ status: 200, data });
};
module.exports = {
  getRandomRecipes,
  singleRecipe,
  searchRecipe,
  newPost,
  filterRecipe,
  getPosts,
  getUserFavorites,
  newFavorite,
  newFavoriteUpdate,
  infoBulk,
};
