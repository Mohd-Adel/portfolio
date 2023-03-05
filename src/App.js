import logo from "./assets/logo.png";
import React from "react";
import homeImg from "./assets/home-img.png";
import { useEffect } from "react";
import Projects from "./components/Projects";

function App() {
  // useEffect(() => {
  //   const scroll = (e) => {
  //     e.currentTarget.scrollTo(0, 700);
  //   };
  //   window.addEventListener("scroll", scroll);
  // }, []);

  return (
    <div className="App" onScroll={() => console.log(document.body.scrollTop)}>
      <div className="container">
        <div className="row logo-container d-flex justify-content-around align-items-center">
          <div className="home-img-container col-md-6 col-xs-12">
            <img src={homeImg} className="home-img" />
          </div>
          <div className="name-container col-md-6 col-xs-12">
            <p className="typewriter">Hi , i'm Mohamed Adel... </p>
            <p className="typewriter2">i'm a front-end web developer </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
