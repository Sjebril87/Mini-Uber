const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to miniUber application." });
});


const db = require("./app/models");
const Role = db.role;
// initialisation de base de donnée
//db.sequelize.sync({force: true}).then(() => {
 // console.log('Drop and Resync Db');
  //initial(); --> pas bien !!!
//});


function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

// routes
require('./app/routes/trip.routes')(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/newtrip.routes')(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

