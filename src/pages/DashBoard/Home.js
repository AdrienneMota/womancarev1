import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../../components/Header"
import Request from "../../components/Request"
import api from "../../services/server"

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
      <RequestsContainer>
        {
          requests?.map( (r) => (
            <Request key={`requests-container-${r.id}`}total={r.total} donatory={r.donatory.user_name} giver={r.giver_id} idRequest={r.id}/>
          ))
        }
        
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