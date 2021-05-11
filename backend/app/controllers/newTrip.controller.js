const newTrip = require("../models/newTrip.models.js");

exports.createTrip = (req, res, next) => {
    const trip = new newTrip({
        date : req.body.date,
        distance : req.body.distance
    
    });
    trip.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.getOneTrip = (req, res, next) => {
    newTrip.findOne({
      _id: req.params.id
    }).then(
      (trip) => {
        res.status(200).json(trip);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };
  
  exports.modifyTrip = (req, res, next) => {
    const trip = new newTrip({
      _id: req.params.id,
      date : req.body.date,
      distance : req.body.distance
    });
    trip.updateOne({_id: req.params.id}, trip).then(
      () => {
        res.status(201).json({
          message: 'Trip updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  
  exports.deleteTrip = (req, res, next) => {
    newTrip.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };
  