import React from "react"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@ant-design/icons"

export const ModalCart = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
        <>
       <Button onClick={onOpen} _focus={{}} fontSize={50} size='lg' height={20} color={'black'}><ShoppingCartOutlined /> </Button>
     
      <Modal
      isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Escolha seus produtos:</ModalHeader>
          <ModalCloseButton _focus={{}} />
          <ModalBody pb={6}>
           <Select>
           <option>Produtos</option>
           <option>Teste</option>

               
           </Select>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder='Last name' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button _focus={{}} onClick={onClose}  colorScheme='blue' mr={3}>
              Salvar
            </Button>
            <Button _focus={{}} onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </>
    )
}