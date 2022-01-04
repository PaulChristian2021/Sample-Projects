import React, { useState, useEffect } from "react";
import c from "./FilterBtn.module.css";

const FilterBtn = (props) => {
  const region = props.region !== "" ? props.region : "";

  const [isActive, setIsActive] = useState(false);
  let active = "";

  // useEffect(() => {
  //   if(props.activeRegion === region){
  //     setIsActive(true)
  //     active = 'c.activeD'
  //   }  
  // }, [])

  useEffect(() => {

    if (props.darkMode === "darkMode" && isActive) {
      active = c.activeD;
    } else if (props.darkMode !== "darkMode" && isActive) {
      active = c.active;
    } else {
      active = "";
    }
  }, [])
  

  // let active = "";

  // if (props.darkMode === "darkMode" && isActive) {
  //   active = c.activeD;
  // } else if (props.darkMode !== "darkMode" && isActive) {
  //   active = c.active;
  // } else {
  //   active = "";
  // }

  return (
    <button
      className={`
      
      ${active}
       ${c.btn}`}
      onClick={activateReg}
    >
      {props.children}
    </button>
  );

  
  function activateReg() {
    props.filterByRegion(region);
    setIsActive(true);
  }
};

export default FilterBtn;
