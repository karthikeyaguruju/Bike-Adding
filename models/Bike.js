const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BikeSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    bikeType: { type: String, required: true },
    isRented: { type: Boolean, required: true }
  },
  { timestamps: true }
);

module.exports = Bike = mongoose.model("bike", BikeSchema);
