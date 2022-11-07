import React, { Component } from "react";
import "./addBike.css";
import { connect } from "react-redux";
import { addBike, showAlert } from "../../redux/actions";
import Alert from "../utils/Alert";

class AddBike extends Component {
  state = {
    name: "",
    price: "",
    bikeType: "Custom",
    isRented: false,
  };

  submitHandler = (e) => {
    e.preventDefault();

    const newBike = {
      name: this.state.name,
      price: +this.state.price,
      bikeType: this.state.bikeType,
      isRented: this.state.isRented,
    };

    if (+this.state.price < 1) {
      return this.props.showAlert("Price cannot be less than $1");
    } else {
      this.props.addBike(newBike);
      this.props.showAlert("You add a bike to available list!");
    }

    this.setState({ name: "", price: "", bikeType: "custom", isRented: false });
  };

  changeInputHandler = (e) => {
    e.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [e.target.name]: e.target.value },
    }));
  };

  render() {
    return (
      <div>
        <h3>
          <span role="img" aria-label="money-mouth">
            &#129297; &#160;
          </span>
          <strong>Create new rent</strong>
        </h3>
        {this.props.app && <Alert text={this.props.app} />}
        <form
          className="d-flex justify-content-between p-4 mb-5"
          onSubmit={this.submitHandler}
        >
          <div className="form-group col-lg-4 md-6">
            <label htmlFor="name"> Bike name </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={this.state.name}
              placeholder="Ex. Canondale S6"
              onChange={this.changeInputHandler}
              required
            />
          </div>
          <div className="form-group col-lg-4">
            <label htmlFor="bikeType">Bike Type</label>
            <select
              id="bikeType"
              name="bikeType"
              className="form-control"
              onChange={this.changeInputHandler}
              value={this.state.bikeType}
            >
              <option value="Custom">Custom</option>
              <option value="Road">Road</option>
              <option value="Mountain">Mountain</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
          </div>
          <div className="form-group col-2">
            <label htmlFor="price"> Rent Price </label>

            <input
              type="number"
              className="form-control"
              name="price"
              id="price"
              value={this.state.price}
              placeholder="99.00"
              onChange={this.changeInputHandler}
              required
            />
          </div>
          <button type="submit" className="btn align-self-end mb-3 submit-rent">
            Submit rent!
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bikes: state.bikes,
    app: state.app.alert,
  };
};

export default connect(mapStateToProps, {
  addBike,
  showAlert,
})(AddBike);
