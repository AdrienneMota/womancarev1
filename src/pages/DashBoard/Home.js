import { useEffect, useState } from "react"
import styled from "styled-components"
import Request from "../../components/Request"
import api from "../../services/server"
import banner from '../../assets/img/banner.png'
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Home(){
  const [requests, setRequests] = useState([])

  async function getAllRequests() {
    try {
      const response = await api.get('/requests')
      setRequests(response.data)  
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllRequests()
    }, [])

  return(
    <>
      <Header/>
      <Container>
        <Banner src={banner}/>
        <RequestsContainer>
          {
            requests?.map( (r) => (
              <Request key={`requests-container-${r.id}`} total={r.total} donatory={r.donatory.user_name} giver={r.giver_id} idRequest={r.id}/>
            ))
          }        
        </RequestsContainer>
      </Container>
      <Footer/>
    </>   
    )
}

const Container = styled.div`
  margin-top: 5.5rem;
`
const Banner = styled.img`
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
`
const RequestsContainer = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

