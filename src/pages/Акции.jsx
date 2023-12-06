import { Card,Image, CardBody,  Grid, GridItem,Text,  Container, Button, CardFooter, Box } from "@chakra-ui/react"
// import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { KorzinaContext } from "../context/KorzinaContext"
import { ModalCotext } from "../context/ModalContext"
import MainModal from "../components/Modal/Modal"

import { InputContext } from "../context/InputContext"

export const Акции = () => {  
  
  
 
 const navigate=useNavigate()

const [sliceCount,setSliceCount]=useState(12)
const {AddTOLocaleStorage}=useContext(KorzinaContext)
const {openModal}=useContext( ModalCotext)
const {data}=useContext(InputContext)



  const addToKorzinka=(item)=>{
    AddTOLocaleStorage(item)
  }
  
  return (
    <Container   maxW={'full'} mt={'25px'}     >
      <Grid pl={'70px'}  maxW={'1200px'} templateColumns={{base:'repeat(1,1fr)',sm:'repeat(2,1fr)',lg:'repeat(3,1fr)',xl:'repeat(4,1fr)'}}   gap={'15px'}>
            {data.slice(0,sliceCount).map((item)=>{
              return(
                <GridItem   key={item.id}>
               
                
                  <Card w={'282px'} border={'1px solid gray'} p={'5px'}>
        <Box  onClick={()=>navigate(`/Акции/${item.id}`)} >

                    <Box  w={'50px'} color={'blue'} border={'3px solid yellow'} as="span">-50%</Box>
                      <Image   ml={'25px'}mr={'30px'} w={'80%'}h={'200px'}objectFit={'cover'} src={item.images[1]}/>
                    <CardBody>
                      <Text className="card-item_title" fontWeight={500}>{item.title}</Text>
                      <Text  className="card-item_description" as={'span'}>{item.description}</Text>
                      <Text display={'block'} as={'b'}>${item.price}
                      <Box color={'blue'}>
                      <svg color='red' xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
  <path  d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
</svg>
                      </Box>
                      <Box color={'gray'}>

                       ${item.price*2}
                      </Box>
                       <Box color={'red'}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
                       </Box>
                       </Text>
                    </CardBody>
        </Box>
                    <CardFooter gap={'20px'}>
                      {/* <Link to='/Korzina'> */}
                      <Button onClick={()=>openModal(item)} colorScheme="linkedin" w={'100px'}> kupit</Button>
                      <Button  onClick={()=>addToKorzinka(item)} w={'150px'} colorScheme="yellow">В корзину</Button>
                      {/* </Link> */}
                    </CardFooter>
                  </Card>
                  
              
              </GridItem>
              )
            })}
      </Grid>
      <MainModal/>
            <Button w={'800px'} ml={'230px'} mt={'15px'} mb={'15px'} colorScheme="linkedin" onClick={()=>setSliceCount(sliceCount+12)}>again </Button>
    </Container>
  )
}
