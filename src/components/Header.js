import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import burterfly from '../assets/img/burterfly.png'
import api from '../services/server';
import { useAuth } from '../hook/authContext';

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'))
  const { setUser } = useAuth
  const navigate = useNavigate()

  async function signOut() {
    try {
      await api.delete('/signout', { headers: { 'Authorization': `Bearer ${user.token}`}})
      navigate('/signin') 
      localStorage.clear()
      setUser({
        id: undefined,
        user_name: undefined,
        token: undefined,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <NavBar>
      <Container>
        <Logo onClick={() => navigate('/')}>
        <img src={burterfly} alt='borboleta'/>
        <h1>womancare</h1>
        </Logo>
          <Links>
            <Link className='linkstyle' to='/'>Home</Link>
            <Link className='linkstyle'>Sobre</Link>
            <button className='linkstyle' onClick={() => signOut()}>Sair</button>
          </Links>
      </Container>
    </NavBar>
  );
}

const NavBar = styled.div`
  width: 100vw;
  height: 3.5rem;
  box-shadow: 0px 0px 4px black;
  position: fixed;
  top: 0;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #ffffff;

`
const Container = styled.div`
  width: 95%;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  align-items:  center;
  justify-content: space-between;
`
const Logo = styled.div`
  height: 2rem;
  width: 200px;
  display: flex;
  h1{
    font-size: 32px;
    font-family: 'Alkatra', cursive;;
    font-weight: bold;
    color: #543f7b;
  }
  img{
    width: 40px;
    height: 32px;
  }
`
const Links = styled.div`
  width: 30%;
  display: flex;
  align-items:  center;
  justify-content: space-around;
  .linkstyle{
    width: 3rem;
    padding: 5px;
    background-color: #ffffff;
    color: #6e427b;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;  
    font-size: 15px;
    font-weight: 400;
    border-radius: 5px;
    text-align: center;
  }
  .linkstyle:hover{
      background-color: #6e427b;
      color: #ffffff;
    }
`