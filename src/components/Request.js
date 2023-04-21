import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import icondoacao from '../assets/img/doacao.png'
import iconburterfly from '../assets/img/buterflyicon.png'
import maskValue from '../helps/maskvalue';
import { useState } from 'react';

export default function Request({ total, donatory, giver, idRequest}) {
  let status = !!giver 
  // const [btnAtivo, setBtnAtivo] = useState('button-doacao')
  const navigate = useNavigate()
 
  return (
       <Card>
        <div className="headerImg">
          <img src={iconburterfly}/>
        </div>
        <div className="dadosPedidos">
          <ul>
            <li>
              <span className='title'>{donatory}</span>
            </li>
            <li>
              <ion-icon name="ticket"></ion-icon>
              <span> R$ {maskValue(total)}</span> 
            </li>
            {
              status? 
              <li>
                <ion-icon name="checkmark-circle"></ion-icon>
                <span>Doação atendida</span> 
              </li>
              :
              <li>              
                <ion-icon name="alert-circle"></ion-icon>
                <span>Em aberto</span> 
              </li>            
            }                  
          </ul>
        </div>
        <button className="button-doacao" disabled={status } onClick={() => navigate(`/details/${idRequest}`)}>
          <img src={icondoacao}/>
        </button>
      </Card>
  );
}

const Card = styled.div`
    width: 16rem;
    height: 14rem;
    background-color: #543f7b;
    margin: 30px;
    box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.2), -10px 0 0.4em rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;
    font-family: 'Robot', sans-serif;
    .headerImg{
      margin-left:  15px; 
      img{
        width: 50px;
        height: 50px;        
      }
    }
    .dadosPedidos{
      margin-top: 10px;
      margin-left:  15px;  
      li{
        list-style-type: none;
        padding-bottom: 10px;
        span{
          margin-left: 5px;
        }
      }
      .title{
        font-weight: bold;
      }
    }
    .button-doacao{
      width: 100%;
      height: 50px;
      background-color: #A359A0;
      border-radius: 0px 0px 10px 10px;
      border: none;
      img{
        width: 50px;
        height: 49px;
      }
    }
`