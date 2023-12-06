import { Box, Button, Input, Text,  } from "@chakra-ui/react"
import axios from "axios"
import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate=useNavigate()
  const loginRef=useRef('')
  const psRef=useRef('')
  const [errors,setErrors]=useState()
  const test=async()=>{
    try { const result= await axios.post('https://dummyjson.com/auth/login',{
      username:loginRef.current.value,
      password:psRef.current.value,
    })
    if(result.status===400){
      const token=JSON.stringify(result.data.token)
      localStorage.setItem('token',token)
      navigate('/')

    }
    } catch (error) {
      setErrors(error.response.data.message);
      
    }
  }



  const onLogin=()=>{
    test()
  }

  return (
    <Box mt={'180px'} borderRight={'1px solid gray'} ml={'600px'} maxW={'300px'}>
      <Input placeholder="login" ref={loginRef}/>
      <Input placeholder="password" ref={psRef}/>
      <Button w={'100%'} onClick={onLogin} colorScheme="facebook">Login</Button>
      <Link to='/register'>or Register</Link>
      <Text color={'red'}>{errors}</Text>

    </Box>
  )
}

export default Login