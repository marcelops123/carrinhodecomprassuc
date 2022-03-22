import React, { useState } from "react"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, useToast } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@ant-design/icons"

export const ModalCart = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [nome, setNome] = useState('')
    const [produtos, setProdutos] = useState('')
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const toast = useToast()


    const data = {
        nome,
        produtos

    }
    function SavePedido() {
        toast({
            title: 'Pedido efetuado!',
            description: ` ${nome}, Seu pedido foi efetuado com sucesso!`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        console.log(data)
    }

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
                    <FormControl>

                    </FormControl>
                    <ModalBody pb={6}>
                        <FormControl paddingY={3}>

                            <Input onChange={(e => setNome(e.target.value))} placeholder='Nome completo' />
                        </FormControl>
                        <Select onChange={(e => setProdutos(e.target.value))} >
                            <option>Produtos</option>
                            <option>PDV</option>
                            <option>NFE</option>
                            <option>Comanda</option>
                        </Select>
                    </ModalBody>
                    <ModalFooter>
                        <Button _focus={{}} onClick={() =>
                            SavePedido()

                        }
                            colorScheme='blue' mr={3}>
                            Salvar
                        </Button>
                        <Button _focus={{}} onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}