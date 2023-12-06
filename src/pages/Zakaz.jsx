import { Box, Heading,Grid,GridItem,Image,Text } from "@chakra-ui/react"
import { KorzinaContext } from "../context/KorzinaContext"
import { useContext } from "react"


export const Zakaz = () => {
  const {data}=useContext(KorzinaContext)

  return (
    <Box className="first-zakaz" p={'90px'}>
       <Heading  color={'red'} mb={'30px'} textAlign={'center'}>Siz  {data.length} ta tovar harid qildingiz</Heading>   
       <Box className="Korzina__border1" rounded={'md'} p={'40px'} border={'1px solid gray'}  display={'flex'}>

<Grid >
  
  {data?.map((item)=>(
    <GridItem display={{md:'grid',xl:'flex',lg:'grid'}} className="Korzina__border3" w={'1070px'} pt={'25px'} borderBottom={'1px solid gray'} key={item.id}>
      <Image alt="ax"   p={'20px'}  w={'200px'} h={'150px'} src={item.images[0]}/>
      <Box >

        <Box justifyContent={'space-between'}  display={'flex'}>
      <Box w={'850px'} color={'black'} fontSize={'30px'}  mb={'20px'}>
               {item.title}
      </Box>
     
   
          </Box>        

     
<Text className="card-item_title" mb={'20px'} as={'p'}>
{item.description}
</Text> 

      </Box>
        
 
    </GridItem>
     
  ))}
</Grid>

</Box>
    </Box>
  )
}
