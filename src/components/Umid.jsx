import { Box } from "@chakra-ui/react"

const Umid = () => {

    
  return (
    <Box display={'flex'} gap={'30px'}ml={'30px'}pt={'10px'}  >

        <Box >

        

  
        {/* <Link  className="first-profil" to={'Register'}> */}
         {/* <Box className="first-profil"  mr={'15px'}> */}
            <Box  pl={'15px'}   backgroundColor={'white'} h={'24px'} >
            <svg   xmlns="http://www.w3.org/2000/svg" width="34" height="28" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>
            </Box>
    
                <Box as="h2">
                Профиль
                {/* <Register/> */}
                </Box>
        </Box>


        <Box>
         {/* </Box> */}
                {/* </Link> */}
         {/* <Link className="first-zakaz" to='Zakaz'> */}
         {/* <Box className="first-zakaz" mr={'30px'}> */}
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg>
                <Box as="h2">
                Заказы
                </Box>
        </Box>
 
           <Box>

 
         {/* </Box> */}
        {/* //  </Link> */}
         {/* <Box  className="first-korzina" gridTemplateColumns={{lg:'grid'}} > */}
         {/* <Link className="first-korzina" to='Korzina'> */}
            <Box display={'flex'}>

            
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>    <Box pl={'4px'}pr={'4px'} rounded={'xl'} backgroundColor={'red'} color={'white'}></Box>
            </Box>
                <Box as="h2">
                Корзина
                </Box>
          {/* </Link> */}
         {/* </Box> */}

           </Box>



    </Box>
  )
}

export default Umid