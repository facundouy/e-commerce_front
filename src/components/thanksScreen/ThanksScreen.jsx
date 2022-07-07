import React from "react";
import { Link } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";
import "./thanksScreen.css";

function ThanksScreen() {
  return (
    <div className="thanks-main">
      <div className="thanks-text">Thanks for your purchase!</div>
      <div className="thanks-home-button-container">
        {" "}
        <Link
          to="/"
          className="d-flex align-items-center mt-1 text-decoration-none"
        >
          <GiCupcake className="thanks-icon" />
          <div className="thanks-home-text">Back to home</div>
        </Link>
      </div>
    </div>
  );
}

export default ThanksScreen;
