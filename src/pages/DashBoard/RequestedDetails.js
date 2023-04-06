import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/server"
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
        <ContainerDetails>
           <Itens>
                <h1>Doação</h1>
                {/* {
                    products.map( (item) => (
                        <Item key={`item-conteiner-${item.id}`}>
                            <h2>{item.product.title}</h2>
                            <img src={item.product.image} alt="image product"/>
                            <p>{item.product.description}</p>
                            <p>quantidade: {item.quantity}</p>
                            <p>preço: {item.unit_price}</p>
                        </Item>
                    ))
                }                 */}
                <Item>
                <div class="row">
                    <div class="col-sm">
                    One of three columns
                    </div>
                    <div class="col-sm">
                    One of three columns
                    </div>
                    <div class="col-sm">
                    One of three columns
                    </div>
                </div>
                </Item>             
           </Itens>
            <Pedido>
               <h1>Resumo do Pedido</h1>
               <h3>Total R$ {request.total/1000}</h3>
            <button onClick={() => navigate('/details/payment')}>Realizar pedido</button>
            </Pedido>
        </ContainerDetails>
    )
}

const ContainerDetails = styled.div`
    /* background-color: pink; */
    margin-top: 5.5rem;
    width: 88vw;
    height: 100vh;
    margin-right: auto;
    margin-left: auto;
`
const Pedido = styled.div`
    background-color: yellow;
`
const Itens = styled.div`
    h1{
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        height: 40px;
        color: #543f7b;
    }
`
const Item = styled.div`
    background-color: pink;
    height: 30px;
    text-align: center;
    text-justify: center;
    .col-sm{
        
    }
`
// const Item = styled.div`
//     background-color: green;
//     img{
//         width: 129px;
//         height: 193px;
//         margin-bottom: 30px;
//         border: 2px solid white;
//     }
// `



