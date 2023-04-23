import React, { useState } from "react";
import homeImg from "./assets/home-img.png";
import { useEffect } from "react";
import Projects from "./components/Projects";
import Home from "./components/Home";
import TopNav from "./components/TopNav";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  const [counter, setCounter] = useState(0);

  const pageHeight = window.innerHeight;

  const hide = () => {
    return "hide";
  };
  return (
    <div className="App">
      {/* <Intro /> */}
      <TopNav />
      <div className="container main-container" dir="ltr">
        <Home
          className="section "
          counter={counter}
          setCounter={setCounter}
          homeImg={homeImg}
        />
        <About className="section " />
        <Skills className="section" />
      </div>
    </div>
  );
}

export default App;
