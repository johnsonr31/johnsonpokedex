import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";


function MainPageComponent() {
  async function FetchMon () {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/quilava/');
    const data = await promise.json();
    
  
  }
  
    return (
      <div>
          <Container fluid>
              <Row>
                  <Col>
                    <h1>Pokémon API</h1>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Form.Control type="text" placeholder="Enter Pokémon Name Here" />
                  </Col>
                  <Col>
                    <div className="search-btn">Search for a Pokémon</div>
                  </Col>
              </Row>
          </Container>
      </div>
    )
}

export { MainPageComponent }