import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import api from "../../services/server"
import styled from "styled-components"
import pix from "../../assets/img/pix.png"
import card from "../../assets/img/card.png"
import calculatorquantity from "../../helps/calculatorquantity"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { toast } from "react-toastify"
import maskValue from "../../helps/maskvalue"

export default function RequestedDetails() {
    const { requestId } = useParams()
    const [ request, setRequest] = useState({})
    const [ products, setProducts] = useState([])
    const [ methodPayment, setmethodPayment ] = useState('')
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))

    
    async function getRequestById() {
        try {
            const response = await api.get(`requests/${requestId}`)
            setRequest(response.data)   
            setProducts(response.data.product_request)
        } catch (error) {
            toast("Houve um erro... Tente mais tarde.")
        }        
    }
    
    function validate() {
        if(!methodPayment){
            toast("Escolha um método de pagamento.")
        }else if(user?.token === undefined){
            toast("Realize o login para esta operação.")
        }else{
            navigate(`/payment/${methodPayment}/${request.id}`, {state: { total: request.total, donatary: request.donatory.user_name}})
        }
    }

    useEffect(() => {
        getRequestById()
    }, [])

    return (
        <>
            <Header/>
            <ContainerDetails>
            <Itens>
                    <h1>Doação</h1>
                    <HeaderItens>
                        <div className="product"></div>
                        <div className="quantity">Quantidade</div>
                        <div className="price">Preço</div>
                    </HeaderItens>
                    {
                        products?.map( (p) => (
                        <Item key={p.id}>
                            <Produto>
                                <img src={p.product.image} alt="product"/>
                                <div className="descricaoProduto">
                                    <h2>{p.product.title}</h2>
                                    <p>{p.product.description}</p>
                                </div>  
                            </Produto>     
                            <Quantidade>
                                <p>{p.quantity}</p>
                            </Quantidade>    
                            <Preco>
                            <p>{`R$ ${maskValue(p.unit_price * p.quantity)}`}</p>
                            </Preco>          
                        </Item>
                    ))
                    }      
            </Itens>
                <ResumoPedido>
                    <div className="paymentMethod">
                        <h1>Método de pagamento</h1>
                        <div>
                            <input 
                                type="radio" 
                                name="option_payment" 
                                value="card"
                                onChange={(e) =>  {setmethodPayment(e.target.value)}}
                            />
                            <img src={card}/>
                            <span>Cartão de crédito</span>                                            
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="option_payment" 
                                value="pix"
                                onChange={(e) =>  {setmethodPayment(e.target.value)}}
                            />
                            <img src={pix}/>
                            <span>Pix QRcode</span>                                            
                        </div> 
                    </div>
                    <div className="resumo">
                        <h1>Quantidade total</h1>
                        <p>{calculatorquantity(products)}</p>                             
                    </div>
                    <div className="total">
                        <h1>Total a doar: </h1>
                        <p>R$ {maskValue(request.total)}</p>
                        <button onClick={validate}>Realizar pedido</button>
                    </div>
                </ResumoPedido>
            </ContainerDetails>
            <Footer/>
        </>
    )
}

const ContainerDetails = styled.div`
    margin-top: 5.5rem;
    width: 88vw;
    height: 100vh;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Roboto', sans-serif;
`
const Itens = styled.div`
    width: 100%;
    h1{
        font-size: 32px;
        font-family: 'Roboto', sans-serif;
        height: 40px;
        color: #543f7b;
        margin-bottom: 15px;
    }
`
const HeaderItens = styled.div`
    background-color: #a359a0;
    width: 100%;
    height: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    text-align: center;
    color: #f4f4f4;
    .product{
        width: 50%;
    }
    .quantity, .price{
        width: 25%;
    }
`
const Item = styled.div`
    height: 120px;
    border-bottom: 1px solid #543f7b;
    color: black;
    padding-top: 15px;
    display: flex;
    overflow-y: hidden;
    @media (max-width: 554px) {
        .descricaoProduto{
            p{
                display: none;
            }
        }
    }
   

`
const Produto = styled.div`
    line-height: 1.5;
    display: flex;
    width: 50%;
    img{
        width: 101px;
        height: 76px;
        margin-left: 15px;
    }
    h2{
        margin-left: 10px;
        font-size: 16px;
        font-weight: bold;
    }
    p{
        margin-left: 10px;
        font-size: 14px;
    }
`
const Quantidade = styled.div`
    width: 25%;
    p{
        margin: 0px auto;
        text-align: center;
        padding-top: 0.5rem;
        border-radius: 5px;
        width: 58px;
        height: 40px;
    }
`
const Preco = styled.div`
    width: 25%;
    p{
        text-align: center;
    }
`
const ResumoPedido = styled.div`
    background-color: #D7A7FC;
    margin-top: 41px;
    height: 180px;
    border-bottom: 10px solid #a359a0;
    display: flex;
    padding: 16px;
  
    .paymentMethod{
        width: 50%;
        margin-left: 10px;
        div{
            margin-top: 15px;
            height: 30%;
            width: 60%;
            display: flex;
            align-items: center;
            padding-left: 10px;
            img, span{
                margin-left: 10px;
            }
        }
    }
    .resumo, .total{
        width: 25%;
       
        text-align: center;
        h1{
            margin-bottom: 15px;
        }
    }
    .total{
        button{
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: none;
            background-color: #a359a0;
            color: #f4f4f4;
            margin-top: 2rem;
        }
    }
`