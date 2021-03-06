const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const fetch = require("isomorphic-fetch");
const port = 8000;
const api_url = 'https://api.spoonacular.com/recipes/';


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
 res.send("Port 8000 working");
});

app.get("/recipes", async (req, res) => {
const api_key = "869328b28cc740099dfb4d27be27a88e"
try{


 const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": `${api_key}`,
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "useQueryString": 'true'
	}
})
const data = await response.json()


res.status(200).json({data: data})
}
catch(err){
console.log('error')
}
})
app.listen(port, () => {
  console.log("listening on port 8000");
});
