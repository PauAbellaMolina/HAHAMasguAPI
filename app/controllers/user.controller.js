const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.tryLoging = (req, res) => {
  User.findAll({ //find user with received user and pass from api call from frontend
    where: {
      username: req.body.data.name,
      password: req.body.data.pin
    }
  })
  .then(data => {
    res.send(data); //Send logged user info back
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Error tryLoging() in user.controller.js"
    });
  });
};

// Create and Save
exports.create = (req, res) => {
  // Validate request
//   if (!req.body.title) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

  // Create
  const user = {
    username: req.body.username,
    password: req.body.password
  };

  // Save
  User.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error create() in user.controller.js"
      });
    });
};

// Retrieve all
exports.findAll = (req, res) => {
  
    User.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error findAll() in user.controller.js"
        });
      });
};

// Find a single with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}. (findOne() in user.controller.js)`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id + ". (findOne() in user.controller.js)"
      });
    });
};

// Update by the id in the request
exports.update = (req, res) => {
  
};

// Delete with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all from the database.
exports.deleteAll = (req, res) => {
  
};
