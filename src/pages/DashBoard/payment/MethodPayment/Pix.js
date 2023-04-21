import styled from "styled-components"
import { PixQRCode, PixParams } from "pix-react"
import { useState } from "react"
import api from "../../../../services/server";
import { toast } from "react-toastify"
import maskValue from "../../../../helps/maskvalue";


export default function Pix({ requestId, total, donatary }){
  const user = JSON.parse(localStorage.getItem("user"))
  const [dadosPix, setDadosPix] = useState({
        chave: '',
        cidade: 'default',
        recebedor: donatary,
        valor: total,
        identificador: '1234',
        mensagem: ''
  })

  function handlePix(e){
    const {name, value} = e.target 
    setDadosPix({...dadosPix, [name]: name==='valor'? parseFloat(value): value})
  }

  async function requestPayment(e) {
    console.log(requestId.requestId)
    e.preventDefault();
    try {
        await api.patch(`/request/payment/${requestId}`, {}, { headers: { 'Authorization': `Bearer ${user.token}`}})
        toast('Doação realizada com sucesso')
    } catch (error) {
        toast('Ops... Algo deu errado, tente mais tarde.')
    }
  } 

  return(
    <DadosPix>
        <Qrcode>
        <div>
          <PixQRCode 
              pixParams={dadosPix}
              renderAs="svg"
              includeMargin={true}
              size={256}
          />
        </div>
      </Qrcode>
      <form onSubmit={requestPayment} autoComplete="off">
        <div class="row">
          <div class="col">
            <input required="required" type="text" class="form-control" placeholder="Chave pix" name="chave" value={dadosPix.chave} onChange={handlePix}/>
          </div>
          <div class="col">
            <input type="text" class="form-control" name="recebedor" value={dadosPix.recebedor} disabled/>
          </div>
          <div class="col">
            <input type="text" class="form-control" name="valor" value={(maskValue(total))} disabled/>
          </div>
          <div class="col">
            <input required="required" type="text" class="form-control" placeholder="Mensagem (Opcional)" name="mensagem" value={dadosPix.mensagem} onChange={handlePix}/>
          </div>
        </div>
        <button>FINALIZAR PAGAMENTO</button>
      </form>
    
    </DadosPix>
  )
}

const DadosPix = styled.div`
  background-color: #D7A7FC;
  border: 2px solid #a359a0;
  border-radius: 5px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-top: 5.5rem;
  @media (max-width: 1110px) {
    flex-direction: column;
    border: none;
  }

  form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    .form-control{
      width: 18rem;
      margin: 10px auto 10px auto;
    }
    button{
        width: 18rem;
        height: 2.5rem;
        border-radius: 5px;
        border: none;
        background-color: #a359a0;
        color: #f4f4f4;
        margin-top: 2rem;
    }
  }
`
const Qrcode = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    text-align: center;
    margin-top: 10px;
  }
`