import { Button } from "@chakra-ui/react"
import { Select } from "antd"

export const BotaoConfirmar = () => {

    function MostrarSelect() {
        <Select>Teste</Select>
    }

    return (
        <>
        <Button onClick={MostrarSelect}>Confirmar Empresa</Button>
    
        </>
    )
}