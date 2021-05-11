const { authJwt } = require("../middleware");
const controller = require("../controllers/trip.controller");
const db = require("../models");
const config = require("../config/auth.config");

const Trip = db.trip;

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.post("/api/trip/", controller.create);

  app.get("/api/trip/", controller.findAll);

  app.get('/api/trip/:id',controller.findOne);

  app.get('/api/trip/:driverId',controller.findIdDriver);

  app.put('/api/trip/acceptTrip',controller.updateDriver);
  
  app.put('/api/trip/:id',controller.update);

  app.delete('/api/trip/',controller.deleteAll);

  app.delete('/api/trip/:id',controller.delete);

 
}

function test()
{console.log("yop")}