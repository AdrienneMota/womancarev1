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
      await api.delete('/signout', { headers: { 'Authorization': `Bearer ${user?.token}`}})
      navigate('/') 
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

  if(user?.token){
    return (
      <NavBar>
        <Container>
          <Logo onClick={() => navigate('/')}>
          <img src={burterfly} alt='borboleta'/>
          <h1>womancare</h1>
          </Logo>
            <Links>
              <Link className='linkstyle' to='/'>Home</Link>
              <Link className='linkstyle' to='/about'>Sobre</Link>
              <Link className='linkstyle' onClick={() => signOut()}>Sair</Link>
            </Links>
        </Container>
      </NavBar> 
    )
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
            <Link className='linkstyle' to='/about'>Sobre</Link>
            <Link className='linkstyle' to='/signin'>Entre ou cadastre-se </Link>
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
  @media (max-width: 410px) {
    width: 100%;
  }

`
const Logo = styled.div`
  height: 2rem;
  width: 200px;
  display: flex;
  cursor: pointer;
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
  @media (max-width: 410px) {
    img{
      width: 20px;
      height: 12px;
    }
    h1{
    font-size: 32px;
    font-family: 'Alkatra', cursive;;
    font-weight: bold;
    color: #543f7b;
  }
  }
`
const Links = styled.div`
  width: 50%;
  display: flex;
  align-items:  center;
  justify-content: space-around;
  .linkstyle{
    width: 10rem;
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
`

