import { useEffect, useState } from "react"
import styled from "styled-components"
import Request from "../../components/Request"
import api from "../../services/server"
import Carousel from 'react-bootstrap/Carousel'
import firstimg from '../../assets/img/codes need coffee.png'

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
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstimg}
            alt="First slide"
          />  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstimg}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
           <img
            className="d-block w-100"
            src={firstimg}
            alt="Third slide"
        />
        </Carousel.Item>
      </Carousel>
      <TitleSession>
        Doe agora
        <div></div>
      </TitleSession>
      
      <RequestsContainer>
        {
          requests?.map( (r) => (
            <Request key={`requests-container-${r.id}`}total={r.total} donatory={r.donatory.user_name} giver={r.giver_id} idRequest={r.id}/>
          ))
        }        
      </RequestsContainer>
      <div className="divcard">

      </div>
    </Container>   
    )
}

const Container = styled.div`
  margin-top: 5.5rem;
  .divcard{
    width: 18rem;
    height: 17rem;
    background-color: #d0bedf;
    margin: 30px;
    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.2), -10px 0 0.4em rgba(0, 0, 0, 0.2);

  }
`
const TitleSession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-around;
  width: 100%;
  height: 50px;
  margin-top: 2rem;
  color: #543f7b;
  font-family: 'Roboto', sans-serif;  
  font-size: 30px;
  div{
    width: 400px;
    height: 2px;
    background-color: #543f7b;
  }
`
const RequestsContainer = styled.div`
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

