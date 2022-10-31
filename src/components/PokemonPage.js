import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [currentSearch, setCurrentSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(poke => setPokemon(poke))
  }, [])
  
  function onSearchChange(e){
    setCurrentSearch(e)
  }
  
  const pokeSearch = pokemon.filter((poke) => {
    return poke.name.toLowerCase().includes(currentSearch.toLowerCase())
  })

  function pokemonSubmit(poke){
    setPokemon([...pokemon, poke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPokemonSubmit={pokemonSubmit}/>
      <br />
      <Search currentSearch={currentSearch} onSearchChange={onSearchChange}/>
      <br />
      <PokemonCollection pokemon={pokeSearch} />
    </Container>
  );
}

export default PokemonPage;
