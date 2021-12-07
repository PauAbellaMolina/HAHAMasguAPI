module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("game", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      gameCode: {
        type: Sequelize.INTEGER,
        unique: true
      },
      idCreator: {
        type: Sequelize.INTEGER
      },
      guess: {
        type: Sequelize.STRING
      },
      emoji1: {
        type: Sequelize.STRING
      },
      emoji2: {
        type: Sequelize.STRING
      },
      emoji3: {
        type: Sequelize.STRING
      },
      emoji4: {
        type: Sequelize.STRING
      },
      idWinner: {
        type: Sequelize.INTEGER
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ["gamecode"]
        }
      ]
    }
    );
  
    return Game;
  };