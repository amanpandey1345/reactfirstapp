import React, { useState } from 'react'
import "./App.css";
import Card from './Card';
const Blog = () => {

    const [show, setshow] = useState(true)

  return (
    <div className='m1'>
        <button onClick={()=>setshow(!show)}>{show ? "Hide Card":"Show Card"}</button>
        <br />
        {show && 
        <>
        <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5iXKvoy70BHIa9jyXVQ7LhDG_jci7grD0LA&usqp=CAU"}  h1={"This is Our First Card"} p={"This is Our First Card content "}/>
        <Card img={"https://www.tutorialspoint.com/images/trending_categories.svg"} h1={"This is Our  Card 02"} p={"This is Our First Card content 02 "}/>
        <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc5CgKg1n0O_ApnagXJ6-WQGHBeNWrpElNfg&usqp=CAU" h1={"This is Our  Card 03"} p={"This is Our First Card content 03"}/>
        </>
        }
     
    </div>
  )
}

export default Blog