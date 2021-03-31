require("dotenv").config();
const { MongoClient } = require("mongodb");

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addingRecipe = async (req, res) => {
  const { username, title, details } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = await client.db("recipes");
  const data = await db.collection("postedRecipes").insertOne({
    username: username,
    title: title,
    details: details,
  });

  client.close();
  res.status(201).json({ status: 201, data: data });
};

const getPostedRecipes = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  console.log("connected");
  const db = await client.db("recipes");

  const data = await db.collection("postedRecipes").find().toArray();

  client.close();
  res.status(200).json({ status: 200, data: data });
};
module.exports = { addingRecipe, getPostedRecipes };
