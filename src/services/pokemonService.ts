async function getPokemons() {
  try {
    const data = await fetch('http://pokeapi.co/api/v2/pokemon/ditto');
    console.log(data.text);
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
  }
}

export { getPokemons };
