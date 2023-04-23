import React from "react";
import MainHome from "./MainHome";

const Home = ({ counter, setCounter, homeImg }) => {
  const pageHeight = window.innerHeight;
  console.log(pageHeight);
  return (
    <div className="section">
      <div className="row logo-container d-flex justify-content-between ">
        <div className={` up-arrow col-xs-12 ${counter === 0 ? "hide" : ""} `}>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <MainHome homeImg={homeImg} />
        <div
          className="down-arrow col-xs-12"
          onClick={() => {
            window.scrollBy(0, pageHeight);
            console.log(pageHeight);
          }}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
