import { createContext } from "react"
import { useState } from "react"

export const DynamicContext=createContext(null)
const DynamicProvider = ({children}) => {
  const [pul1,setPul1]=useState(1)
  const [pul2,setPul2]=useState()

    
        
  const decrement1=(qu)=>{
    setPul1(pul1+1)
    setPul2(qu+qu)
  }
  const incremant1=(qu)=>{
    if(pul1>0){

      setPul1(pul1-1)
    setPul2(qu-qu)

    }
  }

    // const decrement2=()=>{
    //     decrement1(pul2)
    //   }
    //   const incremant2=()=>{
    //     incremant1(pul2)
    //   }


  return (
    
  <DynamicContext.Provider value={{pul1,pul2,decrement1,incremant1}}>
      {children}
  </DynamicContext.Provider>
  )
}

export default DynamicProvider