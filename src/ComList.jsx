import React, { useState } from 'react'

const ComList = () => {
    const [search, setSearch] = useState("")
    const data = ["Aman","Shafak","Neha","Neetu","Shyam"]
    const singlestudent = {
        id:1,
        Name:"Aman Pandey",
        Age:23,
        Location:"Bhopal"
    }

    const StudentList = [
        {
            id:1,
            Name:"Aman Pandey",
            Age:23,
            Location:"Bhopal"
        },
        {
            id:2,
            Name:"Shafak Shekh",
            Age:22,
            Location:"Bhopal"
        },
        {
            id:3,
            Name:"Neha Mewada",
            Age:22,
            Location:"Bhopal"
        },
        {
            id:4,
            Name:"Neetu vanshakar",
            Age:22,
            Location:"Bhopal"
        },
        {
            id:5,
            Name:"shyam sharma",
            Age:22,
            Location:"mandideep"
        },
    ]


    // "a"=="b" ? console.log("hello a is equal to a ") : console.log("hello a is not equal to a");

  return (
    <>
    <input type="text" onChange={(e)=>setSearch(e.target.value)} />
    <div className="m1">
        {
            data.map((value,index)=>
                <h1 key={index}>{value}</h1>
            )
        }
        <div className="">
        {
            StudentList.map((value,index)=>
            {

                if(value.Name == search){
                    return(

                    <div>
                <h1 key={index}>id:{value.id}</h1>
                <h1 key={index}>Name:{value.Name}</h1>
                <h1 key={index}>Age:{value.Age}</h1>
                <h1 key={index}>Location:{value.Location}</h1>
                </div>
                    )
                } 
                if(search == ""){
                    return(

                    <div>
                <h1 key={index}>id:{value.id}</h1>
                <h1 key={index}>Name:{value.Name}</h1>
                <h1 key={index}>Age:{value.Age}</h1>
                <h1 key={index}>Location:{value.Location}</h1>
                </div>
                    )
                } 
               
            }

          
            )
        }
        </div>
        <h1>

        {
            search ? "Search is not Empty ": "Search is  Empty "
        }
        </h1>
    </div>
    </>
  )
}

export default ComList