import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export default function Request() {
  return (
    <RequestCard>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Marcela Mendes</Card.Title>
            <Card.Text>
                <p>
                    Valor: R$ 10,00<br/>
                    Status: em aberto
                </p>
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