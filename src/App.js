import React, { createContext, useContext, useState } from 'react'
import DataContext from './store';
import Count from './Count';


const UserData = createContext();

const App = () => {

  const [data, setData] = useState("Aman")
  const [data1, setData1] = useState("Pandey")

  return (
  <DataContext.Provider value={data1}>
    <UserData.Provider value={data}>
    <div>App
      <input type="text" onChange={(e)=> setData(e.target.value)} />
      <input type="text" onChange={(e)=> setData1(e.target.value)} />
      <Box />
      <Count/>

    </div>
    </UserData.Provider>
    
    </DataContext.Provider >
  )
}

export default App




const Box = () => {


  const user = useContext(UserData)
  const data = useContext(DataContext)

  return (
    <div>
      Box 
      <h1>{user}</h1>
      <h1>hello this is store data:- {data}</h1>
    </div>
  )
}

