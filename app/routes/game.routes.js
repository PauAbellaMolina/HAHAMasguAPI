const { route } = require("express/lib/application");

module.exports = app => {
    const games = require("../controllers/game.controller.js");
  
    var router = require("express").Router();
  
    router.post("/enter-game-room", games.enterGameRoom);

    // Create a new Tutorial
    router.post("/", games.create);
  
    // Retrieve all Tutorials
    router.get("/", games.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", games.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", games.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", games.delete);
  
    // Delete all Tutorials
    router.delete("/", games.deleteAll);
  
    app.use('/api/games', router);
  };