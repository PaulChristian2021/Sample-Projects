import React from 'react'
import {BsMoonFill} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'
import c from './Nav.module.css'


const Nav = (props) => {

  const darkMode = props.darkMode;

  return (
    <nav className={`${darkMode} ${c.nav}`}>
      <h1 className={`${darkMode} ${c.h1}`}>Countries Database</h1>
      <button className={c.button} onClick={props.toggleTheme} >
        {!darkMode && <BsMoon />}
        {darkMode && <BsMoonFill />}
        <span className={c.darkMode}>{!darkMode ? 'Dark' : 'Light'} Mode</span>
      </button>
    </nav>
  )
}

export default Nav
