const express = require("express");
const app = express();
const cors = require("cors");
const models = require("./models");
const port = 3001;

app.use(cors()); // enable CORS
app.use(express.json()); // body parser

app.get("/favorites", async (req, res) => {
  const cities = await models.Favorites.findAll();
  res.status(200).json(cities);
});

// Route will be used to create favorites
app.post("/favorites", async (req, res) => {
  const { city } = req.body;

  await models.Favorites.findOrCreate({ where: { city } });
  //   const favorite = await models.Favorites.findAll({ where: { city } });

  res.status(200).json();
});

app.listen(port, () => {
  console.log(`server is running on ${port}...`);
});
