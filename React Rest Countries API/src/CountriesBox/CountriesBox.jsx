import React from "react";
// import { useSelector } from 'react-redux'
import c from "./CountriesBox.module.css";
// import { Link, Outlet } from 'react-router-dom'


const CountriesBox = (props) => {
  const countriesCube = props.filteredCountries.map((cty) => {
    return (
      <div
        onClick={() => {
          props.selectCountry(cty)
        }}
        className={c.cube}
        style={{ background: `url(${cty.flags.svg}`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        key={cty.name.common}
      ></div>
    );
  });

  return <div id={c.countriesBox}>{countriesCube}</div>;
};

export default CountriesBox;
