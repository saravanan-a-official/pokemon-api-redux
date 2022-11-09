import { useSelector } from "react-redux";

import PokemonListPagination from "./pokemon-list-pagination";
import SpinnerComponent from "./spinner-component";

//Display pokemon as list inside pagination
function PokemonListPage() {
  const pokemonListData = useSelector((state) => state);
  //const pokemonListData = {};
  return (
    <div className="App">
      {pokemonListData.action?.payload?.length > 0 ? (
        <PokemonListPagination
          pokeFigureData={pokemonListData.action.payload}
        ></PokemonListPagination>
      ) : (
        <h1>
          <SpinnerComponent text="Fetching Pokemon data....." />
        </h1>
      )}
    </div>
  );
}

export default PokemonListPage;
