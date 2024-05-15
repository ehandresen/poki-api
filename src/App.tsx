import './App.css';

function App() {
  async function hello() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const ditto = await response.json();
    console.log(ditto.name);
  }

  hello();

  return <></>;
}

export default App;
