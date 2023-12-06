import { createContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
export const InputContext=createContext(null)
const InputProvider = ({children}) => {
  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((result)=>setData(result.data.products))
    
  }
  ,[])
  // const [brend,setBrend]=useState({})
  // const buyProduct=(id)=>{
  //   const newpProduct=data.map((buy)=>buy.id===id)
  //   setBrend(newpProduct)

  // }
  
  return (
    <InputContext.Provider value={{data,setData,}} >
    {children}
    </InputContext.Provider>
  )
}

export default InputProvider