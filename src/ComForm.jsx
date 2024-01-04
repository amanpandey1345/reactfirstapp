import React, { useState } from 'react'
import Data from './Data'

const ComForm = () => {

    const [formData, setFormData] = useState({})

    const handleForm =(e)=>{
        e.preventDefault()
        // const v1 = e.target[0].value
        // const v2 = e.target[1].value
        // const v3 = e.target[2].value

        // console.log(v1);
        // console.log(v2);
        // console.log(v3);

        setFormData(
            {
                Name:e.target[0].value,
                Mobile:e.target[1].value,
                Location:e.target[2].value,
                Student:e.target[3].value
            }
        )
        console.log(formData);
    }
  return (
    <>
    <h1>{JSON.stringify(Data)}</h1>
    <h1> Form Data:- {JSON.stringify(formData)}</h1>
    <form onSubmit={handleForm} >
        <input type="text"  />
        <input type="number" />
        <input type="text" placeholder='location' />
        <input type="color" placeholder='location' />

        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default ComForm