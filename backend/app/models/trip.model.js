module.exports = (sequelize, Sequelize) => {
    const Trip = sequelize.define("trip", {
      
      date: {
        type: Sequelize.DATE 
      },
      distance: {
        type: Sequelize.INTEGER
      },
      driverId :{
        type: Sequelize.INTEGER
      }
    });
  
    return Trip;
  };