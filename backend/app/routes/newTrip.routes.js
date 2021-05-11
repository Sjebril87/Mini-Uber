const { authJwt } = require("../middleware");
const controller = require("../controllers/newTrip.controller");



module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
app.post('/api/newtrip/', controller.createTrip);
app.get('/api/newtrip/:id', controller.getOneTrip);
app.put('/api/newtrip/:id', controller.modifyTrip);
app.delete('/api/newtrip/:id', controller.deleteTrip);
}
