import { Box,Link } from "@chakra-ui/react"

const Menu = () => {
  return (
    <Box className="new-link"  ml={'30px'}>

            <Box   >
            
                <Link  display={'block'}  className="link1"  to={'/Акции'}>Акции</Link>
            </Box>
            <Box  >
                <Link display={'block'} className="link2"  to={'Строительные '}>Строительные материалы</Link>
            </Box>
            <Box >
                <Link display={'block'} className="link3"  to={'Керамическая '}>Керамическая плитка</Link>
            </Box>
            <Box>
                <Link display={'block'} className="link4"  to={'Краски'}>Краски</Link>
            </Box>
            <Box>
                <Link display={'block'} className="link5" to={'Сантехника'}>Сантехника</Link>
            </Box>
            
            <Box>
                <Link display={'block'} className="link6" to={'Напольные '}>Напольные покрытия</Link>
            </Box>
            <Box>
                <Link display={'block'} className="link7" to={'Инструменты'}>Инструменты</Link>
            </Box>
            <Box>
                <Link display={'block'} className="link8" to={'Обои'}>Обои</Link>
            </Box>
            <Box  >
                <Link display={'block'} className="link9" to={'Окна'}>Окна</Link>
            </Box>
           

    </Box>
  )
}

export default Menu