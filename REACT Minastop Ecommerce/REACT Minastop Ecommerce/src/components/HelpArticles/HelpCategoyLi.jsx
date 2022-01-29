import React from "react";
import c from "./HelpCategoyLi.module.css";

const HelpCategoyLi = (props) => {
  // console.log(props);
  return (
    <li
      className={`${c.li} ${props.className} ${
        props.active === props.text ? c.active : ""
      }`}
      onClick={()=>props.onClick(props.text)}
    >
      {props.text[0].toUpperCase() + props.text.slice(1)}
    </li>
  );
};

export default HelpCategoyLi;
