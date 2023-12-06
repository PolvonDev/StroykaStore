import { Box, Grid,  } from "@chakra-ui/react"
import { Link,    Outlet, useLocation } from "react-router-dom"
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import {  Button, Heading } from "@chakra-ui/react"
import { useContext,  } from "react"
// import{Login}from'./pages/Login.jsx'

// import { KorzinaContext } from "../context/KorzinaContext"
// import { ModalCotext } from "../context/ModalContext"

// import { Context } from "./pages/Context.jsx"
// import axios from "axios"
import { useState } from "react"

function Navbar()  {
    //  const {openModal}=useContext(ModalCotext)
       
//    const {data}=useContext(KorzinaContext)
   const [value,setValue]=useState()
const {data,setData  }=useContext(InputContext)


   


    
      
                
      
    const Search=()=>{
        const inputValue=value.toLowerCase()
        const newData=data.filter((shov)=>shov.title.toLowerCase().includes(inputValue))
        setData(newData)
    }

    
    
  return (
    <Box  maxW={'full'} pl={'80px'}    pb={'20px'} pt={'20px'}  mb={'10px'}  display={{base:'grid',md:'flex',lg:'flex',xl:'flex'}}>
            
        <Box gridTemplateColumns={{base:'repeat(1,1fr)'}} display={'flex'} mr={'10px'}>

            <Box>


            <Button p={'10px'} colorScheme={'yellow'}>
            <svg  width="29" height="38" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M9.90941 0.989718C9.80926 1.03831 9.69383 1.15336 9.64588 1.25238C9.56573 1.41796 9.57414 1.56756 9.78627 3.74621C9.91042 5.02093 10.011 6.11817 10.0098 6.18448C9.99818 6.85326 8.99082 6.9745 8.78901 6.3314C8.76091 6.24193 8.68662 5.61445 8.62382 4.93696C8.56103 4.25947 8.49956 3.67398 8.48727 3.63587C8.45874 3.54776 7.85089 3.8697 7.10738 4.36661C5.63212 5.35257 4.45079 6.71001 3.66859 8.31784C3.37461 8.92221 3.03189 9.90696 2.89783 10.5324L2.80518 10.9649H2.43462C1.90052 10.9649 1.67046 11.0485 1.35802 11.3562C0.981927 11.7267 0.877993 12.1185 1.02541 12.6099C1.11178 12.8979 1.55264 13.3321 1.84496 13.4172C2.01383 13.4663 4.54599 13.4809 12.8915 13.4809C25.1064 13.4809 24.0279 13.52 24.4458 13.0622C24.923 12.5394 24.923 11.9063 24.4458 11.3836C24.1653 11.0763 23.8706 10.9649 23.3385 10.9649H22.9579L22.8652 10.5324C22.4302 8.5024 21.2458 6.50427 19.6668 5.13688C18.8546 4.4335 17.3284 3.47474 17.276 3.63498C17.2634 3.67356 17.2003 4.27127 17.1358 4.96317C17.0713 5.65507 16.9872 6.29733 16.9489 6.39037C16.868 6.58699 16.5922 6.77108 16.378 6.77134C16.0561 6.77176 15.7586 6.49227 15.7532 6.18448C15.7521 6.11817 15.8528 5.01931 15.9771 3.74259C16.1997 1.45659 16.2017 1.41849 16.1054 1.24242C15.9157 0.895525 15.9655 0.900714 12.8735 0.902077C10.3937 0.903125 10.068 0.91277 9.90941 0.989718ZM3.96751 15.2066C3.30841 15.3652 2.79012 15.9256 2.68916 16.5888L2.65159 16.8356H1.93677C1.24876 16.8356 1.21704 16.8404 1.09134 16.9642C0.961758 17.0918 0.960693 17.101 0.960693 18.0936C0.960693 19.0861 0.961758 19.0953 1.09134 19.2229C1.21715 19.3468 1.24839 19.3516 1.94283 19.3516H2.66367V20.2655C2.66367 20.774 2.68842 21.2448 2.71944 21.3269C2.79374 21.5234 4.66552 23.3782 4.88382 23.4716C5.13618 23.5797 10.4056 23.5797 10.668 23.4717C10.854 23.3952 10.8712 23.3759 11.5239 22.5111C11.9853 21.8999 12.7627 21.0807 12.8815 21.0807C13.0003 21.0807 13.7778 21.8999 14.2391 22.5111C14.8918 23.3759 14.909 23.3952 15.095 23.4717C15.3575 23.5797 20.6269 23.5797 20.8792 23.4716C21.0975 23.3782 22.9693 21.5234 23.0436 21.3269C23.0746 21.2448 23.0994 20.774 23.0994 20.2655V19.3516H23.8202C24.5147 19.3516 24.5459 19.3468 24.6717 19.2229C24.8013 19.0953 24.8024 19.0861 24.8024 18.0936C24.8024 17.101 24.8013 17.0918 24.6717 16.9642C24.546 16.8404 24.5143 16.8356 23.8263 16.8356H23.1115L23.0738 16.5882C23.0315 16.3105 22.8527 15.9327 22.6527 15.6986C22.5795 15.6128 22.3686 15.462 22.1841 15.3635L21.8488 15.1844L12.988 15.1763C8.11453 15.1719 4.05532 15.1855 3.96751 15.2066ZM21.3964 18.761V20.6866L20.7986 21.277L20.2008 21.8676H18.0422H15.8836L15.5422 21.4089C15.3544 21.1567 14.9244 20.6772 14.5866 20.3435C13.4816 19.2517 12.8402 19.1038 11.8988 19.724C11.4468 20.0218 10.6925 20.7804 10.2142 21.4182L9.87727 21.8676H7.72151H5.5657L4.9662 21.2787L4.36665 20.6899V18.7627V16.8356H12.8815H21.3964V18.761Z" fill="#171B24"/>
</svg>
            </Button>

            <Link  to={'/Umid'}>

<Button  mt={'10px'} colorScheme="linkedin" display={{xl:'none',lg:'fllex',md:'flex',base:'flex'}}>
<HamburgerIcon/>
</Button>
       
 </Link>

            </Box>
            
      
        <Heading ml={'30px'} as="h5" color={'#171B24'}>Stroyka</Heading>
    </Box>
        <Box   mr={'35px'} ml={'30px'} display={{md:'grid',lg:'flex',xl:'flex'}} gap={'15px'} >
            <Button className="input8" p={'25px'} colorScheme="yellow">Каталог</Button>
            <Box border='none' className="form" display={'flex'}justifyContent={'space-between'} p={'10px'} rounded={'md'} h={'50px'} width={'450px'}  >
                <input    onChange={(e)=>setValue(e.target.value)}   className="input7"  size="50"  placeholder="Поиск" type="text" />
                <SearchIcon className="input" fontSize={'25px'} pt={'3px'}/>
            </Box>
            <Box>
                <Button className="input8"  onClick={Search}  h={'50px'} colorScheme="facebook" >Поиск </Button>
            </Box>
         </Box>
                <Link className="first-profil" to={'Register'}>
         <Box className="first-profil"  mr={'15px'}>
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
                </Link>
         <Link className="first-zakaz" to='Zakaz'>
         <Box className="first-zakaz" mr={'30px'}>
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
</svg>
                <Box as="h2">
                Заказы
                </Box>
         </Box>
         </Link>
         <Box  className="first-korzina" gridTemplateColumns={{lg:'grid'}} >
         <Link className="first-korzina" to='Korzina'>
            <Box display={'flex'}>

            
         <svg xmlns="http://www.w3.org/2000/svg" width="34" height="28" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>    <Box pl={'4px'}pr={'4px'} rounded={'xl'} backgroundColor={'red'} color={'white'}></Box>
            </Box>
                <Box as="h2">
                Корзина
                </Box>
          </Link>
         </Box>
        
         </Box>

  )
}


function Header  () {
  
  return (
    <Box className="links" maxW={'full'}   gap={'20px'} top={'10px'} p={'10px'}  borderBottom={'1px solid gray'}borderTop={'1px solid gray'} >
        <Grid className="link"  w={'1200px'} ml={'75px'} gap={'10px'} display={'flex'} as="ul" >
            <Link to='/Menu'>

            <Button display={{base:'inline',sm:'inline',md:'none',lg:'none',xl:'none'}} w={'100px'} className="menu">Menu</Button>
            </Link>
            <Box  mr={'20px'} >
                <Link className="link1"  to={'/Акции'}>Акции</Link>
            </Box>
            <Box mr={'20px'} >
                <Link className="link2"  to={'Строительные '}>Строительные материалы</Link>
            </Box>
            <Box mr={'20px'} >
                <Link className="link3"  to={'Керамическая '}>Керамическая плитка</Link>
            </Box>
            <Box mr={'20px'}>
                <Link className="link4"  to={'Краски'}>Краски</Link>
            </Box>
            <Box mr={'20px'}>
                <Link className="link5" to={'Сантехника'}>Сантехника</Link>
            </Box>
            
            <Box mr={'20px'}>
                <Link className="link6" to={'Напольные '}>Напольные покрытия</Link>
            </Box>
            <Box mr={'20px'}>
                <Link className="link7" to={'Инструменты'}>Инструменты</Link>
            </Box>
            <Box mr={'20px'}>
                <Link className="link8" to={'Обои'}>Обои</Link>
            </Box>
            <Box mr={'20px'}  >
                <Link className="link9" to={'Окна'}>Окна</Link>
            </Box>
           

        </Grid>
    </Box>
  )
}
     




  
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { InputContext } from "../context/InputContext"
// import { KorzinaContext } from "../context/KorzinaContext"
// import { InputContext } from "../context/InputContext"
function Footer  () {
    const {pathname}=useLocation()
    
    return (
      <Box  maxW={'full'}   mt={'30px'} backgroundColor={'black'} gap={'20px'} top={'10px'} p={'70px'}    pr={'100px'}>
          <Grid className="Footer"    gap={'200px'} display={'flex'} as="ul" >
            <Box >
            <Box className="footer-link1" color="white" >
            <Button mr={'10px'} p={'10px'} colorScheme={'yellow'}>
            <svg  width="29" height="38" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  d="M9.90941 0.989718C9.80926 1.03831 9.69383 1.15336 9.64588 1.25238C9.56573 1.41796 9.57414 1.56756 9.78627 3.74621C9.91042 5.02093 10.011 6.11817 10.0098 6.18448C9.99818 6.85326 8.99082 6.9745 8.78901 6.3314C8.76091 6.24193 8.68662 5.61445 8.62382 4.93696C8.56103 4.25947 8.49956 3.67398 8.48727 3.63587C8.45874 3.54776 7.85089 3.8697 7.10738 4.36661C5.63212 5.35257 4.45079 6.71001 3.66859 8.31784C3.37461 8.92221 3.03189 9.90696 2.89783 10.5324L2.80518 10.9649H2.43462C1.90052 10.9649 1.67046 11.0485 1.35802 11.3562C0.981927 11.7267 0.877993 12.1185 1.02541 12.6099C1.11178 12.8979 1.55264 13.3321 1.84496 13.4172C2.01383 13.4663 4.54599 13.4809 12.8915 13.4809C25.1064 13.4809 24.0279 13.52 24.4458 13.0622C24.923 12.5394 24.923 11.9063 24.4458 11.3836C24.1653 11.0763 23.8706 10.9649 23.3385 10.9649H22.9579L22.8652 10.5324C22.4302 8.5024 21.2458 6.50427 19.6668 5.13688C18.8546 4.4335 17.3284 3.47474 17.276 3.63498C17.2634 3.67356 17.2003 4.27127 17.1358 4.96317C17.0713 5.65507 16.9872 6.29733 16.9489 6.39037C16.868 6.58699 16.5922 6.77108 16.378 6.77134C16.0561 6.77176 15.7586 6.49227 15.7532 6.18448C15.7521 6.11817 15.8528 5.01931 15.9771 3.74259C16.1997 1.45659 16.2017 1.41849 16.1054 1.24242C15.9157 0.895525 15.9655 0.900714 12.8735 0.902077C10.3937 0.903125 10.068 0.91277 9.90941 0.989718ZM3.96751 15.2066C3.30841 15.3652 2.79012 15.9256 2.68916 16.5888L2.65159 16.8356H1.93677C1.24876 16.8356 1.21704 16.8404 1.09134 16.9642C0.961758 17.0918 0.960693 17.101 0.960693 18.0936C0.960693 19.0861 0.961758 19.0953 1.09134 19.2229C1.21715 19.3468 1.24839 19.3516 1.94283 19.3516H2.66367V20.2655C2.66367 20.774 2.68842 21.2448 2.71944 21.3269C2.79374 21.5234 4.66552 23.3782 4.88382 23.4716C5.13618 23.5797 10.4056 23.5797 10.668 23.4717C10.854 23.3952 10.8712 23.3759 11.5239 22.5111C11.9853 21.8999 12.7627 21.0807 12.8815 21.0807C13.0003 21.0807 13.7778 21.8999 14.2391 22.5111C14.8918 23.3759 14.909 23.3952 15.095 23.4717C15.3575 23.5797 20.6269 23.5797 20.8792 23.4716C21.0975 23.3782 22.9693 21.5234 23.0436 21.3269C23.0746 21.2448 23.0994 20.774 23.0994 20.2655V19.3516H23.8202C24.5147 19.3516 24.5459 19.3468 24.6717 19.2229C24.8013 19.0953 24.8024 19.0861 24.8024 18.0936C24.8024 17.101 24.8013 17.0918 24.6717 16.9642C24.546 16.8404 24.5143 16.8356 23.8263 16.8356H23.1115L23.0738 16.5882C23.0315 16.3105 22.8527 15.9327 22.6527 15.6986C22.5795 15.6128 22.3686 15.462 22.1841 15.3635L21.8488 15.1844L12.988 15.1763C8.11453 15.1719 4.05532 15.1855 3.96751 15.2066ZM21.3964 18.761V20.6866L20.7986 21.277L20.2008 21.8676H18.0422H15.8836L15.5422 21.4089C15.3544 21.1567 14.9244 20.6772 14.5866 20.3435C13.4816 19.2517 12.8402 19.1038 11.8988 19.724C11.4468 20.0218 10.6925 20.7804 10.2142 21.4182L9.87727 21.8676H7.72151H5.5657L4.9662 21.2787L4.36665 20.6899V18.7627V16.8356H12.8815H21.3964V18.761Z" fill="#171B24"/>
</svg>
            </Button>
                  <Link to={'/ '}>StroykaStore</Link>
              </Box>
              <Box className="footer-link1" gap={'10px'} mt={'20px'}mb={'20px'} display={'flex'} color="white" >
              <MdOutlineLocalPostOffice fontSize={'20px'} />
                  <Link   to={'Строительные '}>info@stroykastore.ru</Link>
              </Box>
              <Box className="footer-link2" gap={'10px'} display={'flex'} color="white" >
              <SlLocationPin />
                  <Link to={'Строительные '}>Москва, ул. Камушкина 10</Link>
              </Box>
              

              <Box display={{base:'block',md:'block',lg:'block',xl:'none'}}  className="footer__link4">
              <Box  className="footer__link1" color="white">
                  <Link  className="footer__link1" display={''} to={'Инструменты'}>Инструменты</Link>
              </Box>

              <Box  className="footer__link1"  mt={'20px'}mb={'20px'} color="white">
                  <Link  className="footer__link1" display={'block'} to={'Обои'}>Обои</Link>
              </Box>
              <Box  className="footer__link1"  color="white">
                  <Link  className="footer__link1" display={'block'} to={'Окна'}>Окна</Link>
              </Box>
            </Box>


            <Box display={{base:'block',md:'block',lg:'none',xl:'none'}}>
              <Box color="white">
                  <Link to={'/Korzina'}>Корзина</Link>
              </Box>

              <Box mt={'20px'}mb={'20px'} color="white">
                  <Link to={'/Акции'}>Акции</Link>
              </Box>
              
              <Box color="white">
                  <Link to={'Напольные '}>Напольные покрытия</Link>
              </Box>
            </Box>


            <Box  display={{base:'block',md:'none',lg:'none',xl:'none'}} >

<Box className="footer-link3" color="white" >
    <Link  className={ `${pathname==='Акции'?'borderBottom=1px solid gray':''}`}  to={'/'}>Личный кабинет</Link>
</Box>
<Box mt={'20px'}mb={'20px'} color="white" >
    <Link to={'/Zakaz '}>Заказы</Link>
</Box>
<Box  color="white">
    <Link to={'Керамическая '}>Избранное</Link>
</Box>
</Box>

            </Box>
            <Box className="footer__link4" >

              <Box className="footer-link3" color="white" >
                  <Link  className={ `${pathname==='Акции'?'borderBottom=1px solid gray':''}`}  to={'/'}>Личный кабинет</Link>
              </Box>
              <Box mt={'20px'}mb={'20px'} color="white" >
                  <Link to={'/Zakaz '}>Заказы</Link>
              </Box>
              <Box  color="white">
                  <Link to={'Керамическая '}>Избранное</Link>
              </Box>
            </Box>
            <Box className="footer__link3">
              <Box color="white">
                  <Link to={'/Korzina'}>Корзина</Link>
              </Box>

              <Box mt={'20px'}mb={'20px'} color="white">
                  <Link to={'/Акции'}>Акции</Link>
              </Box>
              
              <Box color="white">
                  <Link to={'Напольные '}>Напольные покрытия</Link>
              </Box>
            </Box>
            <Box  className="footer__link2">
              <Box  className="footer__link1" color="white">
                  <Link  className="footer__link1" display={''} to={'Инструменты'}>Инструменты</Link>
              </Box>

              <Box  className="footer__link1"  mt={'20px'}mb={'20px'} color="white">
                  <Link  className="footer__link1" display={'block'} to={'Обои'}>Обои</Link>
              </Box>
              <Box  className="footer__link1"  color="white">
                  <Link  className="footer__link1" display={'block'} to={'Окна'}>Окна</Link>
              </Box>
            </Box>
             
  
          </Grid>
      </Box>
    )
  }
    


  

export const Layout = () => {
   

  return (
    <Box   >
      
       <Navbar/>
        <Header/>
        <Outlet/>
        <Footer/>

    </Box>
  )
}
