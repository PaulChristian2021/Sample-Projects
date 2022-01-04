import React from 'react'
import c from './Nav.module.css';

const Nav = (props) => {
  return (
    <nav className={c.nav}>
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact" id='contact_link' onClick={() => props.toggleContact(true)}>Contact</a>
    </nav>
  )
}

export default Nav
