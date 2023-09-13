import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeScript, theme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider >
      <ColorModeScript theme={theme} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

