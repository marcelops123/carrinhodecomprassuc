import React from "react"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, useToast } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@ant-design/icons"

export const ModalCart = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const toast = useToast()


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
                            <option>PDV</option>
                            <option>NFE</option>
                            <option>Comanda</option>


                        </Select>


                    </ModalBody>

                    <ModalFooter>
                        <Button _focus={{}} onClick={() =>
                            toast({
                                title: 'Pedido efetuado!',
                                description: "Seu pedido foi efetuado com sucesso!",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                            })
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