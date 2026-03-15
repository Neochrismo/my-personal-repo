import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { AlertProvider } from './context/alertContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <ChakraProvider value={defaultSystem}>
      <AlertProvider>
      <App />
      </AlertProvider>
    </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
)