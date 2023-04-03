import { useState } from "react"

export default function Payment() {
    const [methodPayment, setmethodPayment] = useState("")
    
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
                (methodPayment==="null")? 
                   ""
                   :
                   (methodPayment==="pix")?
                   <div>pix</div>
                   :
                   (methodPayment==="card")?
                   <div>card</div>
                   :
                   ""
            }
        </>
    )
}
