import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import KorzinaProvider from './context/KorzinaContext.jsx'
import InputProvider from './context/InputContext.jsx'
import ModalProvider from './context/ModalContext.jsx'
import ProfilModalProvider from './context/ModalContext.jsx'
import DynamicProvider from './context/ModalContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ChakraProvider>

                 <ModalProvider>
                   <ProfilModalProvider>
                        <DynamicProvider>
                       <InputProvider>
                               <KorzinaProvider>
                                       <App  />
                             </KorzinaProvider>       
                      </InputProvider>
                          </DynamicProvider>        
                  </ProfilModalProvider>
                 </ModalProvider>

  </ChakraProvider>
  </BrowserRouter>,
)
