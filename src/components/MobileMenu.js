import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <>
      {ReactDOM.createPortal(<Menu />, document.getElementById("overlay-root"))}
    </>
  );
};

export default MobileMenu;
