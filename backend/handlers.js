require("dotenv").config();
const { api_key } = process.env;

const api_url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes";

const options = ({
    method: "GET",
    headers: {
      "x-rapidapi-key": `${api_key}`,
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      useQueryString: "true",
      "Content-Type": "application/json",
    },
  })

// Get 10 random recipes
const getRandomRecipes = async (req, res) => {
  const response = await fetch(`${api_url}/random?number=10&tags=vegetarian`, options);
  const data = await response.json();

  res.status(200).json({ status: 200, data: data });
};


//Search recipes by ingredients

//Get single Recipe information (ingredients/nurtition/diet)


//Get similar recipes as a particular one 

//Wine pairing with recipe

//Post your own recipe

module.exports = { getRandomRecipes };
