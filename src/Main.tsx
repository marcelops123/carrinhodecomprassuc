import React from 'react';
import { Button, HStack, VStack, Stack, ChakraProvider, Text, Alert, AlertIcon } from '@chakra-ui/react';
import { UseMediaImage } from './components/UseMediaQuery';
import { ShoppingCartOutlined } from '@ant-design/icons'

import 'antd/dist/antd.css';
import { ModalCart } from './components/Modal';


export const Main = () => {

  return (
    <>


      <VStack  >
        <UseMediaImage />
        <VStack>
        <Alert fontSize={20} borderRadius={10} status='info'>
    <AlertIcon />
   Escolha os produtos do seu pedido clicando abaixo!
  </Alert>
          <Text fontSize={50}><b>↓</b></Text>
        </VStack>
        <Stack >
          <ModalCart/>
        </Stack>

      </VStack>





    </>
  );
}

