import React from 'react'
import c from './BorderCountry.module.css'

const BorderCountry = (props) => {
  return (
    <button className={`${props.darkMode} ${c.btn}`} onClick={()=>{
        props.selectCountry(props.text, true)
    }}>
      {props.text}
    </button>
  )
}

export default BorderCountry
