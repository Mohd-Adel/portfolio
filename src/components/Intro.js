import React from "react";
import spin from "../assets/logoSpinner.png";
import D from "../assets/logoD.png";
import labtop from "../assets/logoLaptop.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="to-move">
        <div className="intro-container">
          <img src={spin} className="spin" />
          <img src={D} className="D" />
          <img src={labtop} className="labtop" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
