import { Box, Button, Input,Text } from "@chakra-ui/react"
import axios from "axios"
import { useRef } from "react"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"

const Register = () => {
  const navigate=useNavigate()
  const usernameRef=useRef('')
  const pwRef=useRef('')
  const [error,setError]=useState()

  const auth=async()=>{
    
    try { const res= await axios.post('https://dummyjson.com/auth/register  ',{
      username:usernameRef.current.value,
      password:pwRef.current.value,
    })
     if(res.status===403){

      navigate('/Login')
    }
      
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  const onRegister=()=>{
     auth()
  }

  return (
    <Box  mt={'180px'}  ml={'500px'} maxW={'300px'}>



      <Input  placeholder="username" ref={usernameRef}/>
      <Input mt={'10px'} mb={'10px'} placeholder="password" ref={pwRef}/>
      <Button onClick={onRegister} colorScheme="facebook" w={'100%'}>Register</Button>
      {/* <Link to='/login'>or Login</Link> */}
      <Text color={'red'}>{error}</Text>

      
    </Box>
  )
}

export default Register