import React from 'react'
import c from './SearchCategoriesNav.module.css';


const SearchAndCategories = (props) => {
  return (
    <nav className={c.nav}>
      {props.children}
    </nav>
  )
}

export default SearchAndCategories
