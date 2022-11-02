import { useSelector } from "react-redux";

function PokemonDetails() {
  const pokemonData = useSelector((state) => state);
  console.log("pokemonData");
  console.log(pokemonData.action.payload);
  return (
    <div className="App">
      <h1>Pokemon Details page</h1>
    </div>
  );
}

export default PokemonDetails;
