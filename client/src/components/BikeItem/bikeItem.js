import React from "react";
import "./bikeItem.css";

const BikeItem = ({ bike, deleteBike, toggleRentBike }) => {
  return (
    <div className="card mb-3" key={bike._id}>
      <div className="card-body d-flex justify-content-between align-items-end">
        <p className="align-items-center mb-1">
          {bike.name} / {bike.bikeType} / &#36;
          {parseFloat(bike.price).toFixed(2)}
        </p>
        {!bike.isRented ? (
          <div>
            <button
              className="btn rent mr-5"
              onClick={() => {
                toggleRentBike(bike._id);
              }}
            >
              Rent
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteBike(bike._id);
              }}
            >
              Delete
            </button>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-danger"
              onClick={() => {
                toggleRentBike(bike._id);
              }}
            >
              Cancel rent
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BikeItem;
