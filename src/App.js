import './App.css';
import { MainPageComponent } from './Components/MainPageComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <MainPageComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
