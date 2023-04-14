import { Container, Row, Col } from "react-bootstrap"

function MainPageComponent() {
  return (
    <div>
        <Container fluid>
            <Row>
                <Col>
                    <h1>Pokemon</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export { MainPageComponent }