import Pix from "./MethodPayment/Pix"
import Card from "./MethodPayment/Card"
import styled from "styled-components"
import { useLocation, useParams } from "react-router-dom";
import Header from "../../../components/Header"
import Footer from "../../../components/Footer";

export default function Payment() {
    const { methodPayment } = useParams()
    const requestId = useParams().giver_id
    const location = useLocation()
    const { total, donatary } = location.state

    return (
        <>  
            <Header/>
            <ContainerMethod>
               {
                (methodPayment==="pix")?
                    <Pix requestId={requestId} total={total} donatary={donatary}></Pix> : <Card requestId={requestId} total={total} donatary={donatary} ></Card>  
                }  
            </ContainerMethod>
            <Footer/>
        </>
    )
}

const ContainerMethod = styled.div`
    width: 90vw;
    height: 100vh;
    font-size: 'Roboto', sans-serif;
    padding: 10px;
    margin-top: 5.5rem;
    margin-left: auto;
    margin-right: auto;
`