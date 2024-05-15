import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/pokemonService';
import Pokemon from './components/Pokemon';

function App() {
  const [pokemon, setPokemon] = useState('');

  useEffect(() => {
    const getPokemon = async () => {
      const data = await getPokemons();
      setPokemon(data);
    };

    getPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon API</h1>
      <Pokemon pokemon={pokemon} />
    </>
  );
}

export default App;
