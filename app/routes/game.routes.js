const { route } = require("express/lib/application");
require('dotenv').config();

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

    router.post("/pickWinner/:idGame/:idUser", games.pickWinner);
  
    // Update a Tutorial with id
    router.put("/:id", games.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", games.delete);
  
    // Delete all Tutorials
    router.delete("/", games.deleteAll);
  
    app.use(process.env.API_TOKEN+'/api/games', router);
  };