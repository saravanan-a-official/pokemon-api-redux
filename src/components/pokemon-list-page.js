import { useSelector } from "react-redux";

import PokemonListPagination from "./pokemon-list-pagination";
import SpinnerComponent from "./spinner-component";

//Display pokemon as list inside pagination
function PokemonListPage() {
  const pokemonListData = useSelector((state) => state);

  return (
    <>
      {pokemonListData.action.payload !== undefined ? (
        <PokemonListPagination
          pokeFigureData={pokemonListData}
        ></PokemonListPagination>
      ) : (
        <h1>
          <SpinnerComponent text="Fetching Pokemon data....." />
        </h1>
      )}
    </>
  );
}

export default PokemonListPage;
