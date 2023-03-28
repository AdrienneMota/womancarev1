import styled from "styled-components"
import Header from "../components/Header"
import Request from "../components/Request"

export default function Home(){
    return(
        <>
          <Header/>
          <RequestsContainer>
            <Request/>
            <Request/>
            <Request/>
            <Request/>
            <Request/>
            <Request/>
          </RequestsContainer>
        </>
    )
}

const RequestsContainer = styled.div`
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`