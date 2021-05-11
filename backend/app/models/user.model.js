module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      statut: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
     phone: {
        type: Sequelize.INTEGER
      }
    });
  
    return User;
  };