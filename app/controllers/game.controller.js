const db = require("../models");
const Game = db.games;
const Op = db.Sequelize.Op;

exports.enterGameRoom = (req, res) => {
  Game.findAll({ //find games with received gameCode from api call from frontend
    where: {
      gameCode: req.body.gameCodeRequest,
    }
  })
  .then(data => {
    res.send(data); //Send room back
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error enterGameRoom() in game.controller.js"
    });
  });
};

// Create and Save
exports.create = (req, res) => {
  // Create
  const game = {
    gameCode: req.body.gameCode,
    idCreator: req.body.idCreator,
    guess: req.body.guess,
    hint: req.body.hint,
    emoji1: req.body.emoji1,
    emoji2: req.body.emoji2,
    emoji3: req.body.emoji3,
    emoji4: req.body.emoji4,
    idWinner: req.body.idWinner,
  };

  // Save
  Game.create(game)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error create() in game.controller.js"
      });
    });
};

// Retrieve all
exports.findAll = (req, res) => {
  
    Game.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error findAll() in game.controller.js"
        });
      });
};

// Find a single with an id
exports.findOne = (req, res) => {
  Game.findAll({ //find games with received id from api call from frontend
    where: {
      id: req.params.id,
    }
  })
  .then(data => {
    res.send(data); //Send room back
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error findOne() in game.controller.js"
    });
  });
};

exports.pickWinner = (req, res) => {
  Game.update(
    { idWinner: req.params.idUser },
    { where: { id: req.params.idGame } }
  )
  .then(data => {
    res.send(data); //Send room back
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error pickWinner() in game.controller.js"
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
