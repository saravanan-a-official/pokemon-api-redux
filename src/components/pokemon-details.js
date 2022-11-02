import { useSelector } from "react-redux";

function PokemonDetails() {
  const pokemonListData = useSelector((state) => state);
  console.log("Inside PokemonListPage " + JSON.stringify(pokemonListData));
  return (
    <div className="App">
      <h1>Pokemon Details page</h1>
      {console.log(window.sessionStorage.getItem("pokeId"))}
    </div>
  );
}

export default PokemonDetails;
