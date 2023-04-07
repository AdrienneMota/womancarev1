import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import styled from 'styled-components';

export default function Card(){
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
    
      return (
        <DadosCartao>
           <FormCard>
            <input
                type="tel"
                name="number"
                placeholder="Card Number"
                maxLength="19"
                inputMode="numeric"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
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
            />
          </FormCard>
          <Cards
               number={state.number}
               expiry={state.expiry}
               cvc={state.cvc}
               name={state.name}
               focused={state.focus}
            />
        </DadosCartao>
      );
}

const DadosCartao = styled.div`
  background-color: #D7A7FC;
  border: 2px solid #a359a0;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 40%;
`
const FormCard = styled.form`
  width: 50%;
  height: 80%;
  margin-left: 3rem;
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
`