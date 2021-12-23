module.exports = app => {
    const guesses = require("../controllers/guess.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", guesses.create);
  
    // Retrieve all Tutorials
    router.get("/:idGame", guesses.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:idGame/:idUser", guesses.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", guesses.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", guesses.delete);
  
    // Delete all Tutorials
    router.delete("/", guesses.deleteAll);
  
    app.use('/api/guesses', router);
  };