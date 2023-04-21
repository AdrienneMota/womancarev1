import { useState } from "react"
import styled from "styled-components"
import api from "../../services/server"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hook/authContext"

export default function Signin(){
  const { setUser } = useAuth()
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setData((prev) => ({ ...prev, [name]: value }))
  }

  async function postUser(e) {
    e.preventDefault();
    try {
        const res = await api.post(`/signin`, data)
        localStorage.setItem("user", JSON.stringify(res.data))
        setUser({ ...res.data });
        toast("Login realizado com sucesso!")
        navigate("/")
      } catch (error) {
          if(error.request.status === 401){
          toast('Email e senha incorretos.')
        }
        toast("Houve um erro no login. Verifique os campos preenchidos.")
      }
    }

  return(
    <Container>
        <ContainerForm>
            <Title>Womancare</Title>
            <FormCard onSubmit={postUser}>
            <input
                type="text"
                name="email"
                placeholder="Email"
                value={data.user_name}
                onChange={handleInputChange}
                required="required"
            />
            <input
                type="password"
                name="password"
                placeholder="Senha"               
                value={data.password}
                onChange={handleInputChange}
                required="required"
            />
             <button>Entrar</button>
            </FormCard>
            <Link to={"/signup"}>Primeira vez? Crie uma conta!</Link>
        </ContainerForm>
    </Container>   
    )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  a{
    text-decoration: none;
    margin: 25px;
    color: #543f7b;
  }
  @media (max-width: 768px) {
    background-color: #d7a7fc;
  }
`
const ContainerForm = styled.div`
  background-color: #d7a7fc;
  border: 2px solid #a359a0;
  border-radius: 5px;
  width: 23rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    border: none;
  }
`
const Title = styled.h1`
  margin: 3.5rem 0px 2rem 0px;
  font-size: 50px;
  font-family: 'Alkatra', cursive;;
  font-weight: bold;
  color: #543f7b;
`
const FormCard = styled.form`
  width: 23rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
   width: 20rem;
   height: 2.5rem;
   border-radius: 5px;
   border: 1px solid #f4f4f4;
   margin: 10px;
  }
  button{
        width: 20rem;
        height: 2.5rem;
        border-radius: 5px;
        border: none;
        background-color: #a359a0;
        color: #f4f4f4;
        margin-top: 1rem;
    }
`

