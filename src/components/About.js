import React from "react";
import me from "../assets/me.png";

const About = () => {
  return (
    <div className="about section w-100 d-flex" id="about">
      <div className="d-flex flex-cont flex-row w-100 align-items-center ">
        <div className="container d-flex flex-column">
          <div className="name about-item">React Developer</div>
          <div className="desc about-item">
            i'm a software engineer specialized in building exeptional web
            experiences , creates websites and applications using web languages
            such as HTML, CSS, JavaScript , and React.
          </div>
        </div>
        <div className="  me-img-cont">
          <img className="me-img" src={me} alt="my pic " />
          <div className="me-img-desc" style={{ color: "black" }}>
            Mohamed Adel
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
