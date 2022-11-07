import React, { Component } from "react";

import BikeItem from "../BikeItem/bikeItem";
import { connect } from "react-redux";
import {
  getBikes,
  deleteBike,
  toggleRentBike,
  setBikesLoading,
} from "../../redux/actions";
import Loader from "../utils/Loader";

class BikesList extends Component {
  componentDidMount() {
    this.props.getBikes();
  }

  deleteBike = (id) => {
    this.props.deleteBike(id);
  };

  toggleRentBike = (id) => {
    this.props.toggleRentBike(id);
  };

  render() {
    const { bikes, loading } = this.props.bikes;
    const rentedBicycles = bikes.filter((bike) => !!bike.isRented);
    const availableBicycles = bikes.filter((bike) => !bike.isRented);

    const totalAmount = rentedBicycles.reduce((sum, bike) => {
      return sum + bike.price;
    }, 0);

    if (loading) {
      return <Loader />;
    }

    return (
      <div>
        <h3>
          <span role="img" aria-label="star-struck">
            &#129321;&#160;
          </span>
          <strong>Your rent (Total: &#36;{totalAmount.toFixed(2)})</strong>
        </h3>

        <ul className="list-group mb-4">
          {rentedBicycles.length ? (
            rentedBicycles.map((bike) => {
              return (
                <BikeItem
                  key={bike._id}
                  bike={bike}
                  toggleRentBike={this.toggleRentBike}
                />
              );
            })
          ) : (
            <p>You haven&#39;t rented bikes yet</p>
          )}
        </ul>
        <h3>
          <span role="img" aria-label="bicycle">
            &#128690;&#160;
          </span>
          <strong>Available bicycles ({availableBicycles.length})</strong>
        </h3>
        <ul className="list-group">
          {availableBicycles.length ? (
            availableBicycles.map((bike) => {
              return (
                <BikeItem
                  key={bike._id}
                  bike={bike}
                  deleteBike={this.deleteBike}
                  toggleRentBike={this.toggleRentBike}
                />
              );
            })
          ) : (
            <p>You haven&#39;t available bicycles</p>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bikes: state.bikes,
    loading: state.bikes,
  };
};

export default connect(mapStateToProps, {
  getBikes,
  deleteBike,
  toggleRentBike,
  setBikesLoading,
})(BikesList);
