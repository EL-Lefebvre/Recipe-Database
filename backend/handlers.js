require("dotenv").config();
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

// Get 10 random recipes
const getRandomRecipes = async (req, res) => {
  const response = await fetch(
    `${api_url}/random?apiKey=${apiKey}&number=10&tags=vegetarian,dessert`,
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
    {
      method: "GET",
      headers: {
        apiKey: `${apiKey}`,
      },
    }
  );
  const data = await response.json();

  res.status(200).json({ data: data });
};
//Get similar recipes as a particular one

//Wine pairing with recipe

//Post your own recipe

module.exports = { getRandomRecipes, singleRecipe };
