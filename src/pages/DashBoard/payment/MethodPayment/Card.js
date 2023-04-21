import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import api from "../../../../services/server";

export default function Card( { requestId, total, donatary } ){
    const user = JSON.parse(localStorage.getItem("user"))
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
      });
    
      const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        
        setState((prev) => ({ ...prev, [name]: value }));
      }
    
      const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
      }

      async function requestPayment(e) {
        e.preventDefault();
        try {
          await api.patch(`/request/payment/${requestId}`, {}, { headers: { 'Authorization': `Bearer ${user.token}`}})
          toast('Doação realizada com sucesso')
        } catch (error) {
            toast('Ops... Algo deu errado, tente mais tarde.')
        }
    }
    
      return (
        <DadosCartao>
           <div className='cardContainer'>
            <Cards
               number={state.number}
               expiry={state.expiry}
               cvc={state.cvc}
               name={state.name}
               focused={state.focus}
            />
          </div>
           <FormCard onSubmit={requestPayment}>
            <input
                type="tel"
                name="number"
                placeholder="Card Number"
                maxLength="19"
                inputMode="numeric"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required="required"
            />
            <input
                type="text"
                name="name"
                placeholder="Name"
                maxLength="50"
                inputMode="text"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required="required"
            />
            <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                maxLength="4"
                inputMode="numeric"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required="required"
            />
            <input
                type="tel"
                name="cvc"
                placeholder="cvv"
                maxLength="3"
                inputMode="numeric"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required="required"
            />
             <button>FINALIZAR PAGAMENTO</button>
          </FormCard>
         
        </DadosCartao>
      );
}

const DadosCartao = styled.div`
  background-color: #D7A7FC;
  border: 2px solid #a359a0;
  border-radius: 5px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5.5rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #a359a0;
  gap: 15px;
  padding: 1rem;
  @media (max-width: 1110px) {
    flex-direction: column;
  }
  @media (max-width: 650px) {
    border: none;
  }
  div {
    margin: 0;
  }
`
const FormCard = styled.form`
  width: 20rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  input{
   width: 20rem;
   height: 2.5rem;
   border-radius: 5px;
   border: 1px solid #f4f4f4;
  }
  button{
        width: 20rem;
        height: 2.5rem;
        border-radius: 5px;
        border: none;
        background-color: #a359a0;
        color: #f4f4f4;
        margin-top: 2rem;
    }
`