import React from "react";
import github from "../assets/github-logo.png";

const SkillsBox = ({ logo, level }) => {
  return (
    <div className="skills-box">
      <img src={require(`../assets/${logo}-logo.png`)} alt="logo" />
      <div className="level">{logo}</div>
    </div>
  );
};

export default SkillsBox;
