import React from 'react'

const Backdrop = (props) => {
  return (
    <div style={{width:'100vw', height: '100vh', backgroundColor: 'rgba(26, 25, 25, 0.818)', position: 'fixed', zIndex:'10'}} className={props.className}>
      
    </div>
  )
}

export default Backdrop
