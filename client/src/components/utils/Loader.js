import React from "react";

const Loader = () => {
  return (
    <div className="d-flex align-items-center">
      <strong>Looking your bikes...</strong>
      <div
        className="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loader;
