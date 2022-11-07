const express = require("express");
const router = express.Router();

//Bike Model

const Bike = require("../../models/Bike");

// @route   GET api/bikes
// @desc    Get All Bikes
// @access  Public
router.get("/", (req, res) => {
  Bike.find()
    .then((bikes) => res.json(bikes))
    .catch((err) => res.status(400).json("Error: " + err));
});

// @route   POST api/bikes
// @desc    Add a Bike
// @access  Public
router.post("/", (req, res) => {
  const newBike = new Bike({
    name: req.body.name,
    price: req.body.price,
    bikeType: req.body.bikeType,
    isRented: req.body.isRented,
  });

  newBike
    .save()
    .then((bike) => res.json(bike))
    .catch((err) => res.status(400).json("Error: " + err));
});

//  @route   DELETE api/bikes/:id
//  @desc    Delete a bike
//  @access  Private

router.delete("/:id", (req, res) => {
  Bike.findById(req.params.id).then((bike) =>
    bike
      .remove()
      .then(() => {
        res.json({ success: true });
      })
      .catch((err) => res.status(404).json({ success: false }))
  );
});

router.put("/:id", (req, res) => {
  const _id = req.body._id;

  const bike = {
    name: req.body.name,
    price: req.body.price,
    bikeType: req.body.bikeType,
    isRented: req.body.isRented,
  };

  Bike.findByIdAndUpdate(_id, bike, { new: true }, (err, bike) => {
    if (err) {
      console.log("err", err);
      res.status(500).send(err);
    } else {
      console.log("success");
      res.send(bike);
    }
  });
});

module.exports = router;
