
import { Route, Routes } from 'react-router-dom'
import {Layout} from './components/Layout.jsx'
import './index.css'
import {Акции}from './pages/Акции.jsx'
import {Строительные}from './pages/Строительные.jsx'
import {Керамическая}from './pages/Керамическая.jsx'
import {Краски}from './pages/Краски.jsx'
import {Сантехника}from './pages/Сантехника.jsx'
import {Напольные}from './pages/Напольные.jsx'
import {Инструменты}from './pages/Инструменты.jsx'
import {Обои}from './pages/Обои.jsx'
import {Окна}from './pages/Окна.jsx'
import { Dynamic } from './pages/Dynamic.jsx'
import { Korzina } from './pages/Korzina.jsx'
import Register from'./pages/Register.jsx'
import Login from'./pages/Login.jsx'

import { Zakaz } from './pages/Zakaz.jsx'
import Menu from './components/Menu.jsx'
import Umid from './components/Umid.jsx'



// Qolgan ish turlari:Narh hisoblash mashinasi,buy ni zakaz betdagisi,inputni betlardagi qismi. 





function App() {

 

  return (
    <>
      <Routes>

        <Route path='/' element={<Layout/>}>
            <Route path='/Register' element={<Register />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Menu' element={<Menu />}/>
            <Route path='/Umid' element={<Umid />}/>



        <Route path='/Zakaz' element={<Zakaz/>}/>
        <Route path='/Korzina' element={<Korzina/>}/>

          
        <Route path='/' element={<Строительные/>}/>
        <Route path='/:id' element={<Строительные/>}/>
            
            
            <Route path='/Акции' element={<Акции/>}/>
            <Route path='/Акции/:id' element={<Dynamic/>}/>
            <Route path='/Строительные' element={<Строительные/>}/>
            <Route path='/Строительные/:id' element={<Строительные/>}/>

            <Route path='/Керамическая' element={<Керамическая/>}/>
            <Route path='/Керамическая/:id' element={<Керамическая/>}/>

            <Route path='/Краски' element={<Краски/>}/>
            <Route path='/Краски/:id' element={<Краски/>}/>

            <Route path='/Сантехника' element={<Сантехника/>}/>
            <Route path='/Сантехника/:id' element={<Сантехника/>}/>

            <Route path='/Напольные' element={<Напольные />}/>
            <Route path='/Напольные/:id' element={<Напольные />}/>

            <Route path='/Инструменты' element={<Инструменты />}/>
            <Route path='/Инструменты/:id' element={<Инструменты />}/>
            
            <Route path='/Обои' element={<Обои />}/>
            <Route path='/Обои:id' element={<Обои />}/>

            <Route path='/Окна' element={<Окна />}/>
            <Route path='/Окна/:id' element={<Окна />}/>










        </Route>
      </Routes>
      
    </>
  )
}

export default App
