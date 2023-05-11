import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect, useState } from "react";


function MainPageComponent() {

  let pokemonData = '';
  let randomNumber = 0;
  // let showShiny = false;
  // const blankIconUrl = '../Assets/Images/blankPokemon.png';

  const [ pokemon, setPokemon ] = useState('');
  // const [ types, setTypes ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ monName, setMonName ] = useState('');
  const [ pokemonTypes, setPokemonTypes ] = useState('');

  const handleInput = (e) => {
      setSearchTerm(e.target.value);
    }
  
    const handleSearch = () => {
    setMonName(searchTerm);
    FetchMon();
  }



  async function FetchMon () {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${monName}/`);
    const data = await promise.json();
    console.log(data);
    pokemonData = data;

    setPokemon(data);
    console.log(data.types[0].type.name);
    // let typesArray = (data.types).length;
    let types = [];
    // console.log(typesArray);
    // for(let i = 0; i < typesArray.length; i++)
    // {
    //   types = typesArray.push(data.types[i].type.name);
    // }
    // setPokemonTypes(types);
    // console.log(types + 'hlol');
    // setTypes(data.types);
    // console.log(pokemon);
  }
  
  async function FetchRandomMon () {
    randomNumber = Math.floor(Math.random() * 646);

    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`);


    const data = await promise.json();
    // console.log(data);
    pokemonData = data;

    setPokemon(data);
    let firstLetter = data.name.charAt(0);
    // console.log(firstLetter);

    let typesArray = [];
    // console.log(typesArray);

    for(let i = 0; i < (data.types).length; i++)
    {
      typesArray.push(data.types[i].type.name);
    }
    // console.log(typesArray);
    setPokemonTypes(typesArray.toString(''));
    // console.log(pokemonTypes);
    // console.log(data.types[0].type.name);
    // let typesArray = data.types;
    // let types = [];
  }
  
  // FetchMon();
  
    return (
      <>
          <Container fluid className="header-container">
              <Row className="align-center">
                  <Col className="header-image-column">
                    {/* <h1 className="page-title">Richard's Pokédex</h1> */}
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
                  {/* Height value from the API is stored in decimeters:  Multiplied it by 10 for Centimeters, and used Math.floor to round it down */}
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