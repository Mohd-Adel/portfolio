import React, { useState } from "react";
import SkillsBox from "./SkillsBox";

const Skills = () => {
  const [slider, setSlider] = useState(0);

  const slideFn = (x) => {
    if (x > 0) {
      setSlider(slider + 1000);
      document.querySelector(".skills-box-container").scrollTo(slider, slider);
    } else {
      setSlider(slider - 1000);
      document.querySelector(".skills-box-container").scrollTo(slider, slider);
    }
  };

  return (
    <div className="section skills">
      <div className="container">
        <div className="skills-title">My Top Skills</div>

        <div className="skills-category">
          <div
            className="btn btn-transparent skill-slider-btn"
            onClick={slideFn}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="skills-box-container">
            <SkillsBox logo="c" level="Proficient" />
            <SkillsBox logo="python" level="Proficient" />
            <SkillsBox logo="github" level="Proficient" />
            <SkillsBox logo="mongodb" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="npm" level="Proficient" />
            <SkillsBox logo="nodejs" level="Proficient" />
          </div>
          <div
            className="btn btn-transparent skill-slider-btn"
            onClick={slideFn}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
