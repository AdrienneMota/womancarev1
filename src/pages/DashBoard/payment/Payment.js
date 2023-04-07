import { useState } from "react"
import Pix from "./MethodPayment/Pix"
import Card from "./MethodPayment/Card"
import styled from "styled-components"
import { toast } from 'react-toastify';
import { useParams } from "react-router-dom";

export default function Payment() {
    const { methodPayment } = useParams()
    console.log(methodPayment)

    function submitPayment(){
        //salvar o id da doadora na tabela requests 
        toast('Pagamento Realizado com sucesso!');
    }
    return (
        <>     
            <ContainerMethod>
               {
                (methodPayment==="pix")?
                    <Pix></Pix> : <Card></Card>  
                }  
                <button onClick={() => submitPayment()}>FINALIZAR PAGAMENTO</button>
            </ContainerMethod>
        </>
    )
}

const ContainerMethod = styled.div`
    width: 80vw;
    height: 100vh;
    font-size: 'Roboto', sans-serif;
    padding: 10px;
    margin-top: 5.5rem;
    margin-left: auto;
    margin-right: auto;
    button{
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: #a359a0;
        color: #f4f4f4;
        margin-top: 2rem;
    }
`