import styled from "styled-components"
import { PixQRCode, PixParams } from "pix-react"
import { useState } from "react"
import { useEffect } from "react";

export default function Pix(){
  const [dadosPix, setDadosPix] = useState({
        chave: '',
        cidade: 'default',
        recebedor: '',
        valor: 0,
        identificador: '1234',
        mensagem: ''
  })

  function handlePix(e){
    const {name, value} = e.target 
    setDadosPix({...dadosPix, [name]: name==='valor'? parseFloat(value): value})
  }

  return(
    <DadosPix>
      <form autoComplete="off">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" placeholder="Chave pix" name="chave" value={dadosPix.chave} onChange={handlePix}/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Recebedor" name="recebedor" value={dadosPix.recebedor} onChange={handlePix}/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Valor" name="valor" value={dadosPix.valor} onChange={handlePix}/>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="Mensagem" name="mensagem" value={dadosPix.mensagem} onChange={handlePix}/>
          </div>
        </div>
      </form>
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
    </DadosPix>
  )
}

const DadosPix = styled.div`
  background-color: #D7A7FC;
  border: 2px solid #a359a0;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 45%;
  form{
    display: flex;
    flex-direction: column;
    width: 60%;
    .form-control{
      width: 18rem;
      margin: 10px auto 10px auto;
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