const express = require("express");
const app = express();
const cors = require("cors");
const models = require("./models");
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const port = 3001;

app.use(cors()); // enable CORS
app.use(express.json()); // body parser

//route to get all the users
app.get("/users", async (req, res) => {
  const users = await models.Users.findAll();
  res.status(200).json(users);
});

//route to create a user
app.post("/register/user", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  //checking if user already exists
  models.Users.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      res.status(500).send({ error: "user already exists" });
    } else {
      // if user doesn't exists, will
      // encrypt the password
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          let user = models.Users.build({
            username: username,
            password: hash,
          });

          user
            .save()
            .then((savedUser) => {
              const user = savedUser.toJSON();
              delete user.password;
              res.status(200).json(user);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    }
  });
});

// route to login in user (POST)
app.post("/login/user", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let userId = "";

  models.Users.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      let storedPassword = user.password;
      userId = user.id;
      bcrypt.compare(password, storedPassword)
      .then((result) => {
        if (result) {
          const loggedInUser = user.toJSON()
          delete loggedInUser.password;
          res.status(200).json(loggedInUser);
        } else {
          res.status(500).send({error: 'something went wrong'})
        }
      })
    } else {
      res.status(500).send({message: 'Incorrect username or password'})
    }
  });
});

// --------FAVORITES ROUTES-----------//
app.get("/users/:id/favorites", async (req, res) => {
  const userId = req.params.id
  const cities = await models.Favorites.findAll({
    where: {
      userId: userId
    }
  });
  res.status(200).json(cities);
});

// Route will be used to create favorites
app.post("/users/:id/favorites", async (req, res) => {
  const userId = req.params.id;
  const { city } = req.body;

  await models.Favorites.findOrCreate({ where: { userId, city } });
  //   const favorite = await models.Favorites.findAll({ where: { city } });

  res.status(200).json();
});

app.listen(port, () => {
  console.log(`server is running on ${port}...`);
});
