import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { AlertProvider } from './context/alertContext';
import {ColorModeProvider} from './components/color-mode';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider>
      <HelmetProvider>
      <AlertProvider>
      <App />
      </AlertProvider>
      </HelmetProvider>
      </ColorModeProvider>
     </ChakraProvider>
  </React.StrictMode>
)