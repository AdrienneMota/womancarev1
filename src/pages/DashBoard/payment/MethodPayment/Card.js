import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

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
        <div>
            <Cards
               number={state.number}
               expiry={state.expiry}
               cvc={state.cvc}
               name={state.name}
               focused={state.focus}
            />
           <form>
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
          </form>
        </div>
      );
}