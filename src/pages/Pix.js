import styled from "styled-components"
import { PixQRCode, PixParams } from "pix-react"
import { useState } from "react"
import { useEffect } from "react";

// export interface PixFormParams extends PixParams {
//     iconurl: string;
//   }
  
// export interface ParamFormProps {
//     model: PixFormParams;
//     onChange(n: PixFormParams): void;
//   }
  

export default function Pix(){
  const [dadosPix, setDadosPix] = useState({
        chave: '',
        cidade: '',
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
    <div className="dadosPix">
      <form autoComplete="off">
      <input
        placeholder="chave"
        helpertext="Chave do PIX"
        name="chave"
        value={dadosPix.chave}
        onChange={handlePix}
      />
      <input
        placeholder="cidade"
        helpertext="Cidade"
        name="cidade"
        value={dadosPix.cidade}
        onChange={handlePix}
      />
      <input
        placeholder="recebedor"
        helpertext="Nome de quem vai receber o dinheiro"
        name="recebedor"
        value={dadosPix.recebedor}
        onChange={handlePix}
      />
      <input
        placeholder="valor (R$)"
        helpertext="Valor do PIX"
        type="number"
        name="valor"
        value={dadosPix.valor}
        onChange={handlePix}
      />
      <input
        placeholder="identificador"
        helpertext="Identificador para esse PIX"
        name="identificador"
        value={dadosPix.identificador}
        onChange={handlePix}
      />
      <input
        placeholder="mensagem"
        helpertext="Mensagem/descrição"
        name="mensagem"
        value={dadosPix.mensagem}
        onChange={handlePix}
      />
    </form>

    <PixQRCode 
        pixParams={dadosPix}
        renderAs="svg"
        includeMargin={true}
        size={256}
    />

    </div>
  )
}