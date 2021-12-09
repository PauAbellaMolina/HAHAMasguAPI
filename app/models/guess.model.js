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
      type: Sequelize.TEXT('long')
    },
    photo2: {
      type: Sequelize.TEXT('long')
    },
    photo3: {
      type: Sequelize.TEXT('long')
    },
    photo4: {
      type: Sequelize.TEXT('long')
    },
  },
  );

  return Guess;
};