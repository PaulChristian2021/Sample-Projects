import React from "react";

import { Link } from "react-router-dom";

import c from "./HeaderMenu.module.css";

const HeaderMenu = (props) => {
  const sign = "Sign In";
  
  return (
    <nav className={c.nav}  onClick={props.toggleModal}>
      <div onClick={(e)=>e.stopPropagation()}>
        <Link to={"/sign"} onClick={props.toggleModal}>{sign}</Link>
        
        <Link to={"/contact"} onClick={props.toggleModal}>Contact</Link>
        <Link to={"/help"} onClick={props.toggleModal}>Help Center</Link>
      </div>
    </nav>
  );
};

export default HeaderMenu;
