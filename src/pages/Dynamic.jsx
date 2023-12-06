import { Box, Button, Heading,Image,Text , } from "@chakra-ui/react"
import { useEffect, useState,useContext } from "react"
import {  useParams } from "react-router-dom"
import { KorzinaContext } from "../context/KorzinaContext"

export const Dynamic = () => {
  const {id}=useParams()
  const [queryData,setQueryData]=useState([])




  const {AddTOLocaleStorage}=useContext(KorzinaContext)

  
  const addToKorzinka=(queryData)=>{
    AddTOLocaleStorage(queryData)
  }

  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(response=>response.json())
    .then(data=>setQueryData(data))
  },[id])
  return (
    <Box gap={'200px'} pt={'30px'} ml={'100px'} display={'flex'} maxW={'1300px'} mt={'25px'}>
      <Box>
        <Image p={'20px'} border={'1px solid gray'} h={'350px'} src={queryData.thumbnail}/>
      </Box>
      <Box>
        <Heading mb={'20px'}>
          {queryData.title}
        </Heading>
        <Text  mb={'20px'} as={'p'}>
          {queryData.description}
        </Text>
        <Box  mb={'20px'} >
          

        </Box >
        <Box display={'flex'}  mb={'45px'} >
        <Heading as={'h3'}> цена:{queryData.price}$ </Heading>

         

        </Box>
       
        <Button onClick={()=>addToKorzinka(queryData)} w={'100%'}  colorScheme="yellow">В корзину</Button>
        
      </Box>
    </Box>
  )
}

  
