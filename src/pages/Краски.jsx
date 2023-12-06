import { Card,Image, CardBody,  Grid, GridItem,Text,  Container, Button, CardFooter, Box } from "@chakra-ui/react"
// import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { KorzinaContext } from "../context/KorzinaContext"
import { ModalCotext } from "../context/ModalContext"
import MainModal from "../components/Modal/Modal"

import { InputContext } from "../context/InputContext"
export const Краски = () => {
  const navigate=useNavigate()

    const [sliceCount,setSliceCount]=useState(12)
    const {AddTOLocaleStorage}=useContext(KorzinaContext)
    const {openModal}=useContext( ModalCotext)
    const {data}=useContext(InputContext)
    
    
    
      const addToKorzinka=(item)=>{
        AddTOLocaleStorage(item)
      }
      
      return (
        <Container maxW={'1200px'} mt={'25px'}     >
          <Grid templateColumns={{base:'repeat(1,1fr)',sm:'repeat(2,1fr)',lg:'repeat(3,1fr)',xl:'repeat(4,1fr)'}}   gap={'15px'}>
                {data.slice(0,sliceCount).map((item)=>{
                  return(
                    <GridItem   key={item.id}>
                   
                    
                      <Card w={'282px'} border={'1px solid gray'} p={'5px'}>
            <Box  onClick={()=>navigate(`/Акции/${item.id}`)} >
    
                          <Image   pt={'15px'}  ml={'30px'}mr={'25px'} w={'80%'}h={'200px'}objectFit={'cover'} src={item.images[1]}/>
                        <CardBody>
                          <Text className="card-item_title" fontWeight={500}>{item.title}</Text>
                          <Text  className="card-item_description" as={'span'}>{item.description}</Text>
                          <Text display={'block'} as={'b'}>${item.price}
                        
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
