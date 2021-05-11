module.exports = (sequelize, Sequelize) => {
    const NewTrip = sequelize.define("newtrip", {
      distance: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      }
    });
  
    return NewTrip;
  };