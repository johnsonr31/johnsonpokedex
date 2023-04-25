import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";


function MainPageComponent() {

  let pokemonData = '';
  const [ pokemon, setPokemon ] = useState('');
  const [ searchTerm, setSearchTerm ] = useState('');

  async function FetchMon () {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/quilava/');
    const data = await promise.json();
    console.log(data);
  
  }

  FetchMon();
  
    return (
      <div>
          <Container fluid>
              <Row>
                  <Col>
                    <h1 className="page-title">Pokémon App</h1>
                  </Col>
              </Row>
              <Row className="search-row">
                  <Col xs={4} className="search-bar">
                    <Form.Control type="text" placeholder="Enter Pokémon Name Here" />
                  </Col>
                  <Col xs={2} className="search-btn-col">
                    <div className="search-btn">Search for Pokémon</div>
                  </Col>
              </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                number here
              </Col>
            </Row>
            <Row>
              <Col>
                Name:
              </Col>
              <Col>
                name here
              </Col>
            </Row>
            <Row>
              <Col>
                Types:
              </Col>
              <Col>
                types here
              </Col>
            </Row>
            <Row>
              <Col>
                Types:
              </Col>
              <Col>
                types here
              </Col>
            </Row>
          </Container>
      </div>
    )
}

export { MainPageComponent }