import React from "react";
import logo from "../assets/logo-no-background.png";

const TopNav = () => {
  return (
    <div className="topnav">
      <div className="d-flex justify-content-between container ">
        <div>
          <img src={logo} className="topnav-logo" />
        </div>
        <div>
          <ul className="d-flex justify-content-between menu-list ">
            <li className="menu-list-item ">
              <a href="#about">About</a>
            </li>
            <li className="menu-list-item ">
              <a href="#skills">skills</a>
            </li>
            <li className="menu-list-item">
              <a href="#work">Work</a>
            </li>
            <li className="menu-list-item">
              {" "}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
