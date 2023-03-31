import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export default function Request({ total, donatory}) {
  return (
    <RequestCard>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{donatory}</Card.Title>
            <Card.Text>
                    Valor: R$ {total}<br/>
                    Status: em aberto
            </Card.Text>
            <Button variant="primary">Ver detalhes</Button>
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