import React from "react";
import AddBike from "./components/AddBike/addBike";
// import logo from "./logo.svg";
import "./App.css";
import BikesList from "./components/BikesList/BikesList";

const App = () => {
  return (
    <div className="container">
      <h1 className="mb-5">Awesome bike rental!</h1>
      <AddBike />
      <BikesList />
    </div>
  );
};
export default App;
