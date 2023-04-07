import styled from 'styled-components'

export default function TitleSession() {
    <Title>
         <p>Doe agora</p>
        <div></div>
    </Title>
}

const Title = styled.div`
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
