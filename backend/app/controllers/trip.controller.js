const db = require("../models");
const config = require("../config/auth.config");
const { trip } = require("../models");

const Trip = db.trip;


exports.allAccessTrip = (req, res) => {
  res.status(200).send("Public Content.");
};



exports.create = (req, res) => {
  // Validate request

  const trip = {
    distance: req.body.distance,
    date: req.body.date,
    travelerId :req.body.travelerId

  };

  // Save Trip in the database
  Trip.create(trip)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Trip."
      });
    });

}
  exports.findAll = (req, res) => {
    const distance = req.query.distance;
    var condition = distance ? { distance: { [Op.iLike]: `%${distance}%` } } : null;

    Trip.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving trips."
        });
      });
  };
  

  exports.findOne = (req, res) => {
    const id = req.params.id;

    Trip.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Trip with id=" + id
        });
      });
  };

  exports.findIdDriver = (req, res) => {
    const driverId = req.params.driverId;

    Trip.findByPk(driverId)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Trip with id=" + driverId
        });
      });
  };

  exports.update = (req, res) => {
    const id = req.params.id;

    Trip.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Trip was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Trip with id=${id}. Maybe Trip was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Trip with id=" + id
        });
      });
  };

  exports.updateDriver = (req, res) => {
    let id = req.body.id

    Trip.update(req.body, {
      where: { id: req.body.id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Trip was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Trip with id=${id}. Maybe Trip was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Trip Driver id = " + id
        });
      });
  }

  exports.delete = (req, res) => {
    const id = req.params.id;

    Trip.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Trip was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Trip with id=${id}. Maybe Trip was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Trip with id=" + id
        });
      });
  };

  exports.deleteAll = (req, res) => {
    Trip.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Trips were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all trips."
        });
      });
  }

