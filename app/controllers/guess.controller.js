const db = require("../models");
const Guess = db.guesses;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
  //Create
  const guess = {
    idGame: req.body.state.idGame,
    idUser: req.body.state.idUser,
    guessing: req.body.state.guessing.txtPlayerAnswer,
    photo1: req.body.state.guessing.photos.photo1,
    photo2: req.body.state.guessing.photos.photo2,
    photo3: req.body.state.guessing.photos.photo3,
    photo4: req.body.state.guessing.photos.photo4,
  };

  // Save
  Guess.create(guess)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error create() in guess.controller.js"
      });
    });
};

// Retrieve all
exports.findAll = (req, res) => {
  
    Guess.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error findAll() in guess.controller.js"
        });
      });
};

// Find a single with an id
exports.findOne = (req, res) => {
  
};

// Update by the id in the request
exports.update = (req, res) => {
  
};

// Delete with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all
exports.deleteAll = (req, res) => {
  
};

// Find all published
exports.findAllPublished = (req, res) => {
  
};
