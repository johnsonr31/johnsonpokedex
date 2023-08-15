import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";


function MainPageComponent() {

  let pokemonData = '';
  let randomNumber = 0;

  const [ pokemon, setPokemon ] = useState('');
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ monName, setMonName ] = useState('');
  const [ pokemonTypes, setPokemonTypes ] = useState('');

  const handleInput = (e) => {
      setSearchTerm(e.target.value);
      
    }
  
    const handleSearch = () => {
    FetchMon();
  }



  async function FetchMon () {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}/`);
    const data = await promise.json();
    pokemonData = data;

    setPokemon(data);

    let typesArray = [];

    for(let i = 0; i < (data.types).length; i++)
    {
      typesArray.push(data.types[i].type.name);
    }
    setPokemonTypes(typesArray.toString(''));
  }
  
  async function FetchRandomMon () {
    randomNumber = Math.floor(Math.random() * 646);

    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);


    const data = await promise.json();
    pokemonData = data;

    setPokemon(data);

    let typesArray = [];

    for(let i = 0; i < (data.types).length; i++)
    {
      typesArray.push(data.types[i].type.name);
    }
    setPokemonTypes(typesArray.toString(''));
  }
  
  
    return (
      <>
          <Container fluid className="header-container">
              <Row className="align-center">
                  <Col className="header-image-column">
                    <img className="header-image" src={require('../Assets/Images/pokemonPageImageSmall.png')}/>
                  </Col>
              </Row>
          </Container>
          <br />
            <Container fluid>
              <Row className="search-row">
                  <Col xs={4} className="search-bar">
                    <Form.Control className="pokemon-search" type="text" placeholder="Enter Pokémon Name Here" 
                    onChange={handleInput}
                    />
                  </Col>
                  <Col xs={2} className="search-btn-col">
                    <button 
                    onClick={handleSearch}
                    className="search-btn">Search for Pokémon</button>
                  </Col>
                  <Col xs={2} className="search-btn-col">
                    <button
                    className="random-btn"
                    onClick={FetchRandomMon}
                    >
                      Get a random Pokémon
                    </button>
                  </Col>
              </Row>
          </Container>
          <br />
          <Container fluid className="info-container">
            <Row className="info-row">
              <Col xs={5} className="info-column">
                <Row>
                  <Col>
                    #{pokemon ? pokemon.id : '---'}
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    Name:
                  </Col>
                  <Col>
                    {pokemon ? pokemon.name : '-----'}
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    Type(s):
                  </Col>
                  <Col>
                    {pokemon ? pokemonTypes : '-----'}
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    Height:
                  </Col>
                  <Col>
                    {pokemon ? Math.floor(pokemon.height * 10) : '---'} cm
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    Weight:
                  </Col>
                  <Col>
                    {pokemon ? pokemon.weight / 10 : '---'} kg
                  </Col>
                </Row>
              </Col>
              <Col xs={2} className="image-column">
                <img src={(pokemon ? pokemon.sprites.front_default : null)} />
                <img src={(pokemon ? pokemon.sprites.front_shiny : null)} />
              </Col>
            </Row>
          </Container>
      </>
    )
}

export { MainPageComponent }