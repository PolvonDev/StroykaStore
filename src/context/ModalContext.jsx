import { createContext } from "react"
import { useState } from "react"
import { useToast } from "@chakra-ui/react"
export const ModalCotext=createContext(null)
const ModalProvider = ({children}) => {
  const toast=useToast()
    const [open,setOpen]=useState(false)
    const [product,setProduct]=useState({})
  

    const openModal=(productItem)=>{
        setOpen(true)
        setProduct(productItem)
        // console.log(productItem);
    }
    const closeModal=()=>{
        setOpen(false)
    }
    const byProduct=()=>{
      toast({
        title: 'Haridingiz uchun rahmat.',
        description: "Siz bilan tez orada aloqaga chiqamiz",

        status: 'success',
        isClosable: true,
      })
      closeModal()
    }
  return (
    <ModalCotext.Provider value={{open,openModal,closeModal,product,byProduct,}}>
        {children}
    </ModalCotext.Provider>
  )
}

export default ModalProvider