import axios from 'axios';

async function getPokemons() {
  try {
    const res = await axios.get('http://pokeapi.co/api/v2/pokemon/ditto');
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('Error fetching data', error);
  }
}

export { getPokemons };
