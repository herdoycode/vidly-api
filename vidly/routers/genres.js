const express = require("express");
const route = express.Router();

const genres = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Thriller" },
];

// Getting data

route.get("/", (req, res) => {
  res.send(genres);
});

route.get("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  res.send(genre);
});

// Post Data

route.post("/", (req, res) => {
  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genres);
});

// Updating data

route.put("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  genre.name = req.body.name;
  res.send(genres);
});

// Deleting Data

route.delete("/:id", (req, res) => {
  const genre = genres.find((g) => g.id === parseInt(req.params.id));
  const index = genres.indexOf(genre);
  genres.splice(index, 1);
  res.send(genres);
});

module.exports = route;
