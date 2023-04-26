import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";


function MainPageComponent() {

  let pokemonData = '';
  const [ pokemon, setPokemon ] = useState('');
  // const [ types, setTypes ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ monName, setMonName ] = useState('');

  const handleSearch = () => {
    setMonName(searchTerm);
    console.log(monName);
  }

  async function FetchMon () {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/quilava/`);
    const data = await promise.json();
    console.log(data);
    pokemonData = data;

    setPokemon(data);
    console.log(data.types[0].type.name);
    // setTypes(data.types);
    // console.log(pokemon);
  }

  // FetchMon();
  
    return (
      <div>
          <Container fluid>
              <Row>
                  <Col className="header-image-column">
                    {/* <h1 className="page-title">Richard's Pokédex</h1> */}
                    <img className="header-image" src={require('../Assets/pokemonPageImage.png')}/>
                  </Col>
              </Row>
              <Row className="search-row">
                  <Col xs={4} className="search-bar">
                    <Form.Control type="text" placeholder="Enter Pokémon Name Here" 
                    onChange={({target: {value}}) => setSearchTerm(value)}
                    />
                  </Col>
                  <Col xs={2} className="search-btn-col">
                    <button 
                    onClick={FetchMon}
                    className="search-btn">Search for Pokémon</button>
                  </Col>
              </Row>
          </Container>
          <Container fluid className="info-container">
            <Row>
              <Col className="info-column">
                <Row>
                  <Col>
                    #{pokemon ? pokemon.id : '000'}
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>
                    Name:
                  </Col>
                  <Col>
                    {pokemon ? pokemon.name : null}
                  </Col>
                </Row>
                <Row>
                  <Col xs={1}>
                    Type(s):
                  </Col>
                  <Col>
                    {pokemon ? pokemon.types[0].type.name : null}
                  </Col>
                </Row>
              </Col>
              <Col xs={5} className="image-column">
                <img src={(pokemon ? pokemon.sprites.front_default : null)} />
              </Col>
            </Row>
          </Container>
      </div>
    )
}

export { MainPageComponent }