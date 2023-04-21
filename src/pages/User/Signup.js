import { useState } from "react"
import styled from "styled-components"
import api from "../../services/server"
import { toast } from "react-toastify"
import { Link, useNavigate } from "react-router-dom"

export default function Signup(){
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    user_name: '',
    email: '',
    password: '',    
    confirmPassword: ''
  })

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setData((prev) => ({ ...prev, [name]: value }))
  }

  async function postUser(e) {
    e.preventDefault();
    try {
        await api.post(`/signup`, data)
        toast('Cadastro realizado com sucesso')
        navigate('/signin')
    } catch (error) {
      if(error.request.status === 409){
        toast('Email inserido já cadastrado.')
      }
      toast("Houve um erro no cadastro. Verifique os campos preenchidos.")
    }
}

  return(
    <Container>
      <FormCard onSubmit={postUser}>
            <input
                type="text"
                name="name"
                placeholder="Nome"
                value={data.name}
                onChange={handleInputChange}
                required="required"
            />
            <input
                type="text"
                name="user_name"
                placeholder="Nome do usuária(o)"
                value={data.user_name}
                onChange={handleInputChange}
                required="required"
            />
             <input
                type="text"
                name="email"
                placeholder="Email"               
                value={data.email}
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
            <input
                type="text"
                name="confirmPassword"
                placeholder="Confirme a senha"
                value={data.confirmPassword}
                onChange={handleInputChange}
                required="required"
            />
             <button>Cadastrar</button>
             <Link to={"/signin"}>Fazer Login!</Link>
          </FormCard>
    </Container>   
    )
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  a{
    text-decoration: none;
    color: #543f7b;

  }
  @media (max-width: 768px) {
    background-color: #d7a7fc;
  }

`
const FormCard = styled.form`
  background-color: #d7a7fc;
  border: 2px solid #a359a0;
  border-radius: 5px;
  width: 23rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  input{
   width: 20rem;
   height: 2.5rem;
   border-radius: 5px;
   border: 1px solid #f4f4f4;
  }
  button{
        width: 20rem;
        height: 2.5rem;
        border-radius: 5px;
        border: none;
        background-color: #a359a0;
        color: #f4f4f4;
        margin-top: 2rem;
    }
  @media (max-width: 768px) {
    border: none;
  }
`

