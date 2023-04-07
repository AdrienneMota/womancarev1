import { useEffect, useState } from "react"
import styled from "styled-components"
import Request from "../../components/Request"
import api from "../../services/server"
import banner from '../../assets/img/banner.png'
import TitleSession from "../../components/TitleSession"

export default function Home(){
  const requests = [
    {
      id: 1,
      giver_id: null,
      donatory_id: 1,
      total: 40.00,
      donatory: { user_name: 'Joana' }
    },
    {
      id: 2,
      giver_id: null,
      donatory_id: 1,
      total: 40.00,
      donatory: { user_name: 'Maria' }
    },
    {
      id: 3,
      giver_id: null,
      donatory_id: 1,
      total: 40.00,
      donatory: { user_name: 'Antonia' }
    },
    {
      id: 4,
      giver_id: null,
      donatory_id: 1,
      total: 40.00,
      donatory: { user_name: 'Eduarda' }
    },
    {
      id: 5,
      giver_id: null,
      donatory_id: 1,
      total: 40.00,
      donatory: { user_name: 'Joaquina' }
    },
    {
      id: 6,
      giver_id: null,
      donatory_id: 1,
      total: 40.00,
      donatory: { user_name: 'Eveline' }
    }
  ]
  // const [requests, setRequests] = useState([])

  // async function getAllRequests() {
  //   try {
  //     const response = await api.get('/requests')
  //     setRequests(response.data)  
  //     console.log(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getAllRequests()
  //   }, [])

  return(
    <Container>
      <Banner src={banner}/>
      <TitleSession/>
      <RequestsContainer>
        {
          requests?.map( (r) => (
            <Request key={`requests-container-${r.id}`} total={r.total} donatory={r.donatory.user_name} giver={r.giver_id} idRequest={r.id}/>
          ))
        }        
      </RequestsContainer>
    </Container>   
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

