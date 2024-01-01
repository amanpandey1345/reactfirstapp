import React from 'react'
import "./App.css";
import Cart from './Cart';
const Card = ({img ,h1,p}) => {


  return (
    <div className='card'>
        <img src={img} alt="" className='img1' />
        <h1 className='heading1'>{h1}</h1>
        <p className='ptag'>{p}</p>
        {/* <Cart img={img}h1={h1} p={p}/> */}
    </div>
  )
}

export default Card