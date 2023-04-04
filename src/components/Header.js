import { Link } from 'react-router-dom';
import styled from 'styled-components';
import burterfly from '../assets/img/burterfly.png'

export default function Header() {
  return (
    <NavBar>
      <Container>
        <Logo>
        <img src={burterfly} alt='borboleta'/>
        <h1>womancare</h1>
        </Logo>
          <Links>
            <Link className='linkstyle' to='/'>Home</Link>
            <Link className='linkstyle'>Sobre</Link>
            <Link className='linkstyle'>Sing in</Link>
            <Link className='linkstyle'>Sing up</Link>  
          </Links>
      </Container>
    </NavBar>
  );
}

const NavBar = styled.div`
  background-color: "#ffffff" ; 
  width: 100vw;
  height: 3.5rem;
  box-shadow: 0px 0px 4px black;
  position: fixed;
  top: 0;
  display: flex;
  align-items:center;
  justify-content: center;
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
    width: 40;
    height: 32;
  }
`
const Links = styled.div`
  width: 30%;
  display: flex;
  align-items:  center;
  justify-content: space-around;
  .linkstyle{
    color: #543f7b;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;  
    font-size: 18px;
  }
`