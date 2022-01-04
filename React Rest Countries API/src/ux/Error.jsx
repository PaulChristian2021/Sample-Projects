import React from 'react'
import c from './Error.module.css'
import {BiErrorCircle} from 'react-icons/bi'

const Error = (props) => {
  return (
    <div className={c.error}>
      <BiErrorCircle className={c.svg}/>
      <p>An error has occured.</p>
      <p>"{props.error}"</p>
    </div>
  )
}

export default Error
