import React, {useState} from "react";
import SearchCategoriesNav from '../components/SearchCategoriesNav/SearchCategoriesNav'
import SearchBar from "../components/SearchBar/SearchBar";
import BrowseCategory from "../components/BrowseCategory/BrowseCategory";
import BrowseSection from '../components/BrowseSection/BrowseSection'
import c from "./BrowsePage.module.css";


const BrowsePage = () => {
  const [chosenCategory, setchosenCategory] = useState('')
 
  const filterByCategory = (cat) => {
    setchosenCategory(cat)
  }
  return (
    <section className={`section ${c.section}`}>
      <SearchCategoriesNav className={c.nav}>
        <SearchBar placeholder="Find products"/>
        <BrowseCategory filterByCategory={filterByCategory}/>
      </SearchCategoriesNav>
      <BrowseSection chosenCategory={chosenCategory}/>
    </section>
  );
};

export default BrowsePage;
