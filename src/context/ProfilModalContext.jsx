import { createContext } from "react"
import { useState } from "react"
// import { useToast } from "@chakra-ui/react"
export const ProfilModalContext=createContext(null)
const ProfilModalProvider = ({children}) => {
//   const toast=useToast()
    const [Open,setOpen]=useState(false)
  

    const OpenModal=()=>{
        setOpen(true)
        // setProduct(productItem)
        // console.log(productItem);
    }
    const CloseModal=()=>{
        setOpen(false)
    }
  
    // const byProduct=()=>{
    //   toast({
    //     title: 'Haridingiz uchun rahmat.',
    //     description: "Siz bilan tez orada aloqaga chiqamiz",

    //     status: 'success',
    //     isClosable: true,
    //   })
    //   closeModal()
    // }
  return (
    <ProfilModalContext.Provider value={{Open,OpenModal,CloseModal,}}>
        {children}
    </ProfilModalContext.Provider>
  )
}

export default ProfilModalProvider