import React, { useEffect, useState } from 'react';
import { Button, HStack, VStack, Stack, Image, Text, Alert, AlertIcon } from '@chakra-ui/react';
import { ShoppingCartOutlined } from '@ant-design/icons'
import { ModalCart } from './components/PrimeiraModal';
import axios from 'axios';
import 'antd/dist/antd.css';

export const Main = () => {

  return (

    <>
      <VStack>
        <HStack justify='center' paddingY='3%' >
          <Image width={'100%'} mx={'auto'} src='logosuc.png'></Image>
        </HStack>
        <VStack>
          <Text paddingY={10} fontSize={30}><b>Carrinho de compras</b></Text>
        </VStack>
        <VStack>
          <Alert fontSize={20} borderRadius={10} status='info'>
            <AlertIcon />
            <b>Escolha os produtos do seu pedido clicando abaixo!</b>
          </Alert>
          <Text fontSize={50}><b>↓</b></Text>
        </VStack>
        <Stack >
          <ModalCart />
        </Stack>

      </VStack>





    </>
  );
}

