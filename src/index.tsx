import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Main } from './Main';
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider >

      <Main />
    </ChakraProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

