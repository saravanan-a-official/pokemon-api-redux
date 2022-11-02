import { useSelector } from "react-redux";

import PokemonListPagination from "./pokemon-list-pagination";
import PokemonDetailsOverlay from "./pokemon-details-overlay";

//Returns Pokemon data as a Figure HTML
function iteratePokemonData(pokemonListData) {
  return pokemonListData.action.payload.map((pokeData, id) => {
    return (
      <>
        <PokemonDetailsOverlay pokedata={pokeData} id={id} />
      </>
    );
  });
}

//Display pokemon as list inside pagination
function PokemonListPage() {
  const pokemonListData = useSelector((state) => state);
  //console.log("Inside PokemonListPage " + JSON.stringify(pokemonListData));
  return (
    <div className="App">
      <h1>Pokemon API</h1>
      {pokemonListData.action.payload ? (
        PaginatePokemonFigureList(pokemonListData)
      ) : (
        <h1>Loading Pokemon data.....</h1>
      )}
    </div>
  );
}

//Invokes component and displays Pokemon Figure list with Pagination
function PaginatePokemonFigureList(pokemonListData) {
  const pokemonFigureListData = iteratePokemonData(pokemonListData);

  return (
    <PokemonListPagination
      pokeFigureData={pokemonFigureListData}
    ></PokemonListPagination>
  );
}

export default PokemonListPage;
