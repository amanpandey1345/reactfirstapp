import React from 'react'
import "./App.css"
const ComEvent = () => {

    const handleClick=()=>{
        alert("hello this is click event...")
    }
    const handleMouseOver=()=>{
        alert("hello this is Mouse Over event...")
    }

  return (
    <div className='m1' >
        <button onClick={handleClick}>click</button>
        <button onMouseOver={handleMouseOver}> Mouse Over</button>
    </div>
  )
}

export default ComEvent