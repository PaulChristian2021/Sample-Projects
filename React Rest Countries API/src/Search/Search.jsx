import React from "react";
import c from "./Search.module.css";

const Search = (props) => {
  return (
    <form className={`${props.darkMode ? 'darkInput' : ''} ${c.form}`}>
      <input
        className={`${props.darkMode} ${c.search}`}
        type="text"
        placeholder="Search for a coiuntry.."
        onChange={(e) => props.searchFilteredCountries(e.target.value)}
      />
    </form>
  );
};

export default Search;
