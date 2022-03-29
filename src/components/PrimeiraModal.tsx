/* eslint-disable jsx-a11y/no-access-key */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react"
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, Text, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure, useToast, Alert, AlertIcon } from "@chakra-ui/react"
import { ShoppingCartOutlined } from "@ant-design/icons"
import axios from "axios"


export const ModalCart = () => {



    const { isOpen, onOpen, onClose } = useDisclosure()
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [id, setId] = useState('')
    const [produtos, setProdutos] = useState<any[]>([])
    const toast = useToast()
    const [DataApi, setDataApi] = useState<any[]>([])
    const [ShowModal, setShowModal] = useState(false)
    const [produtoempresa, setProdutoEmpresa] = useState('')

    const showOrHide = () => setShowModal(true)
    console.log(DataApi)
    useEffect(() => {
        axios.get('http://localhost:3001/buscarempresa').then((response => setDataApi(response.data[0])))


    }, [])







    const DadosUsuario = {

        nome,
        endereco,
        email,
        telefone,
        id,
        produtoempresa


    }






    function SavePedido() {
        toast({
            title: 'Pedido efetuado!',
            description: ` ${nome}, Seu pedido foi registrado com sucesso! `,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        axios.post("http://localhost:3001/adicionarcadastro", DadosUsuario);
        console.log(DadosUsuario)
        onClose();
        showOrHide();

    }

    function AparecerProdutos() {
        axios.post('http://localhost:3001/buscarproduto', DadosUsuario).then(response => setProdutos(response.data[0]))
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

                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Nome completo</FormLabel>
                            <Input onChange={(e) => setNome(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Endereço</FormLabel>
                            <Input onChange={(e) => setEndereco(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Telefone</FormLabel>
                            <Input onChange={(e) => setTelefone(e.target.value)} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Selecione o nome da empresa:</FormLabel>
                            <Select onChange={(e) => setId(e.target.value)} placeholder='Selecione abaixo:'>
                                {DataApi.map((empresa: any, id: any) =>
                                    <>
                                        <option value={empresa.idempresas}>{empresa.empresas}</option>
                                    </>
                                )}

                            </Select>
                            <FormControl mt={5}>
                            <Alert fontSize={15} borderRadius={10} status='info'>
                                <AlertIcon />
                                <b>Após selecionar a empresa clique no botão confirmar abaixo para selecionar os produtos</b>
                            </Alert>
                            </FormControl>
                            <FormControl mt={5}>
                                <Button _focus={{}} mb={5} colorScheme='blue' onClick={AparecerProdutos}>Confirmar empresa:</Button>
                                <Select  onChange={(e) => setProdutoEmpresa(e.target.value)} placeholder='Selecione abaixo:'>
                                    {produtos.map((produtos: any) =>
                                        <>
                                            <option> {produtos.produtos}</option>
                                        </>
                                    )}
                                </Select>
                            </FormControl>
                        </FormControl>

                        <FormControl mt={4}>
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button _focus={{}}
                            onClick={SavePedido}
                            colorScheme='blue' mr={3}>
                            Continuar
                        </Button>



                        <Button onClick={() => onClose()} _focus={{}}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>

            </Modal>


        </>

    )
}
