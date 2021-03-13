require("dotenv").config();
const { MongoClient } = require("mongodb");

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const addingRecipe = async (req, res) => {
  const { userName, title, details } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();

  const db = await client.db("recipes");
  const data = await db.collection("postedRecipes").insertOne({
    userName: userName,
    title: title,
    details: details,
  });

  client.close();
  res.status(200).json({ status: 200, data: data.ops });
};

module.exports = { addingRecipe };
