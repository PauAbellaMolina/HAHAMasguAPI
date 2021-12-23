const db = require("../models");
const Guess = db.guesses;
const Op = db.Sequelize.Op;

// Create and Save
exports.create = (req, res) => {
  //Create
  const guess = {
    idGame: req.body.stateAux.gameData.id,
    idUser: req.body.stateAux.guessing.idUser,
    guessing: req.body.stateAux.guessing.txtPlayerAnswer,
    photo1: req.body.stateAux.guessing.photos.photo1,
    photo2: req.body.stateAux.guessing.photos.photo2,
    photo3: req.body.stateAux.guessing.photos.photo3,
    photo4: req.body.stateAux.guessing.photos.photo4,
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
  
    Guess.findAll({
      where: {
        idGame: req.params.idGame
      }
    })
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

// Retrieve all but the one the requesting client submitted
exports.findAllButMine = (req, res) => {
  
  Guess.findAll({
    where: {
      idGame: req.params.idGame,
      idUser: {
        [Op.notLike]: req.params.idUser,
      }
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error findAllButMine() in guess.controller.js"
      });
    });
};

// Find a single with an id
exports.findOne = (req, res) => {
  Guess.findAll({ //find games with received gameCode from api call from frontend
    where: {
      idGame: req.params.idGame,
      idUser: req.params.idUser,
    }
  })
  .then(data => {
    res.send(data); //Send guess back
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error findOne() in guess.controller.js"
    });
  });
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
