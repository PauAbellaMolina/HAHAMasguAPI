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
      hint: {
        type: Sequelize.STRING
      },
      guess: {
        type: Sequelize.STRING
      },
      emoji1: {
        type: Sequelize.CHAR(10)
      },
      emoji2: {
        type: Sequelize.CHAR(10)
      },
      emoji3: {
        type: Sequelize.CHAR(10)
      },
      emoji4: {
        type: Sequelize.CHAR(10)
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