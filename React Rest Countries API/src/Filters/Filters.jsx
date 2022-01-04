import React from "react";
import c from "./Filters.module.css";
import FilterBtn from "./FilterBtn";

const Filters = (props) => {
  return (
    <>
      <form className={c.form} onSubmit={(e) => e.preventDefault()}>
        <FilterBtn
          darkMode={props.darkMode}
          filterByRegion={props.filterByRegion}
          activeRegion={props.activeRegion}
          region={"africa"}
        >
          Africa
        </FilterBtn>
        <FilterBtn
        darkMode={props.darkMode}
          filterByRegion={props.filterByRegion}
          activeRegion={props.activeRegion}
          region={"americas"}
        >
          Americas
        </FilterBtn>
        <FilterBtn
        darkMode={props.darkMode}
          filterByRegion={props.filterByRegion}
          activeRegion={props.activeRegion}
          region={"asia"}
        >
          Asia
        </FilterBtn>
        <FilterBtn
        darkMode={props.darkMode}
          filterByRegion={props.filterByRegion}
          activeRegion={props.activeRegion}
          region={"europe"}
        >
          Europe
        </FilterBtn>
        <FilterBtn
        darkMode={props.darkMode}
          filterByRegion={props.filterByRegion}
          activeRegion={props.activeRegion}
          region={"oceania"}
        >
          Oceania
        </FilterBtn>
        <FilterBtn
        darkMode={props.darkMode}
          filterByRegion={props.filterByRegion}
          activeRegion={props.activeRegion}
          region={""}
        >
          All
        </FilterBtn>
      </form>
    </>
  );
};

export default Filters;
