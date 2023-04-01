import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../services/server"
import styled from "styled-components"

export default function RequestedDetails() {
    const { requestId } = useParams()
    const [ request, setRequest] = useState({})
    const [ products, setProducts] = useState([])
    const [ donatory, setdonatory] = useState('')
    const navigate = useNavigate()
    
    async function getRequestById() {
        try {
            const response = await api.get(`requests/${requestId}`)
            setRequest(response.data)   
            setProducts(response.data.product_request)
            setdonatory(response.data.donatory.user_name)
        } catch (error) {
            console.log(error)
        }        
    }

    useEffect(() => {
        getRequestById()
    }, [])

    return (
        <>
        <Itens>
            <h1>Listinha da {donatory}</h1>
            {
                products.map( (i) => (
                    <Item key={`item-conteiner-${i.id}`}>
                        <h2>{i.product.title}</h2>
                        <img src={i.product.image} alt="image product"/>
                        <p>{i.product.description}</p>
                        <p>quantidade: {i.quantity}</p>
                        <p>preço: {i.unit_price}</p>
                    </Item>
                ))
            }
                
        </Itens>
        <Pedido>
            <h1>Resumo do Pedido</h1>
            <h3>Total R$ {request.total/1000}</h3>
            <button onClick={() => navigate('/details/payment')}>Realizar pedido</button>
        </Pedido>
        </>
    )
}

const Pedido = styled.div`
    background-color: yellow;
`

const Itens = styled.div`
    background-color: blue;
`

const Item = styled.div`
    background-color: green;
    img{
        width: 129px;
        height: 193px;
        margin-bottom: 30px;
        border: 2px solid white;
    }
`


