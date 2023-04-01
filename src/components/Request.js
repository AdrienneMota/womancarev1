import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Request({ total, donatory, giver, idRequest}) {
  let status = !!giver // transforma para booleano inverso e depois transformar para o booleano verdadeiro é uma forma de transformar um valor em booleano
  const navigate = useNavigate()
 
  return (
    <RequestCard>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{donatory}</Card.Title>
            <Card.Text>
                    Valor: R$ {total}<br/>
                    Status: {status? 'atendido' : 'em aberto'}
            </Card.Text>
            <Button variant="primary" 
              onClick={() => navigate(`/details/${idRequest}`)}
            >
              Ver detalhes
            </Button>
        </Card.Body>
        </Card>
    </RequestCard>
  );
}

const RequestCard = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 10px;
`