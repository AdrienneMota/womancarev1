import { useState } from "react"
import Pix from "./MethodPayment/Pix"
import Card from "./MethodPayment/Card"
import styled from "styled-components"
import { toast } from 'react-toastify';

export default function Payment() {
    const [methodPayment, setmethodPayment] = useState("")

    function submitPayment(){
        //salvar o id da doadora na tabela requests 
        toast('Pagamento Realizado com sucesso!');
    }
    
    return (
        <>
           <h1>Método de pagamento</h1>
               <div>
                  <input 
                    type="radio" 
                    name="option_payment" 
                    value="card" 
                    onChange={(e) => {setmethodPayment(e.target.value)}}
                  />
                  <label htmlFor="card">cartão</label>
              </div>
              <div>
                  <input 
                    type="radio" 
                    name="option_payment" 
                    value="pix"
                    onChange={(e) =>  {setmethodPayment(e.target.value)}}
                    />
                  <label htmlFor="pix">Pix</label>
               </div>   
            {
                (methodPayment==="null")? "" 
                   :
                   <ContainerMethod>{
                    (methodPayment==="pix")?
                        <Pix></Pix>
                        :
                        (methodPayment==="card")?
                        <Card></Card>
                    :
                    ""
                   }
                   </ContainerMethod>
            }
            <button onClick={() => submitPayment()}>FINALIZAR PAGAMENTO</button>
        </>
    )
}

const ContainerMethod = styled.div`
    width: 20rem;
    background-color: blue;
    padding: 10px
`