import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { AlertProvider } from './context/alertContext';
import {ColorModeProvider} from './components/color-mode';
import system  from './component/theme.jsx';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider value={system}>
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