const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  console.log(pokemon.types);
  return (
    <>
      <h3>Name: {pokemon.name}</h3>
      <h3># {pokemon.id}</h3>
    </>
  );
};

export default Pokemon;
