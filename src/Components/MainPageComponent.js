import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";


function MainPageComponent() {

  let pokemonData = '';
  const [ pokemon, setPokemon ] = useState('');
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ monName, setMonName ] = useState('');

  const handleSearch = (e) => setSearchTerm(e.target.value);

  async function FetchMon () {
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/quilava/');
    const data = await promise.json();
    console.log(data);
    pokemonData = data;

    setPokemon(data);
    console.log(data.types[0].type.name);
    // console.log(pokemon);
  }

  // FetchMon();
  
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
                    <Form.Control type="text" placeholder="Enter Pokémon Name Here" 
                    // onChange={({target: {value}}) => setSearchTerm(value)}
                    />
                  </Col>
                  <Col xs={2} className="search-btn-col">
                    <div 
                    onClick={FetchMon}
                    className="search-btn">Search for Pokémon</div>
                  </Col>
              </Row>
          </Container>
          <Container fluid>
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
                {pokemon.name}
              </Col>
            </Row>
            <Row>
              <Col>
                Type(s):
              </Col>
              <Col>
                {/* {pokemon.types[0].type.name} */}
              </Col>
            </Row>
          </Container>
      </div>
    )
}

export { MainPageComponent }