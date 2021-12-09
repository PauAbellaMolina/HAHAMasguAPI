module.exports = (sequelize, Sequelize) => {
  const Guess = sequelize.define("guess", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idGame: {
      type: Sequelize.INTEGER
    },
    idUser: {
      type: Sequelize.INTEGER
    },
    guessing: {
      type: Sequelize.STRING
    },
    photo1: {
      type: Sequelize.TEXT
    },
    photo2: {
      type: Sequelize.TEXT
    },
    photo3: {
      type: Sequelize.TEXT
    },
    photo4: {
      type: Sequelize.TEXT
    },
  },
  );

  return Guess;
};