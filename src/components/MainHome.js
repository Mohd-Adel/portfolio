import React from "react";

const MainHome = ({ homeImg }) => {
  return (
    <div className="d-flex align-items-center main-home">
      <div className="home-img-container col-md-6 col-xs-12">
        <img src={homeImg} className="home-img" />
      </div>
      <div className="name-container col-md-6 col-xs-12">
        <p className="typewriter ">Hi , i'm Mohamed Adel... </p>
        <p className="typewriter2 ">i'm a front-end web developer </p>
      </div>
    </div>
  );
};

export default MainHome;
