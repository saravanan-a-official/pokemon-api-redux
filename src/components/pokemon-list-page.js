import { useSelector } from "react-redux";

import { Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import * as CommonConstants from "../common/commonConstants";
import PokemonListPagination from "./pokemon-list-pagination";

//Returns Pokemon data as a Figure HTML
function iteratePokemonData(pokemonListData) {
  return pokemonListData.action.payload.map((pokeData, id) => (
    <Figure key={id}>
      <Figure.Image
        width={CommonConstants.POKE_IMG_SIZE}
        height={CommonConstants.POKE_IMG_SIZE}
        alt={pokeData.name}
        src={
          CommonConstants.POKE_IMG_URL +
          (+id + 1) +
          CommonConstants.POKE_IMG_EXT
        }
      />
      <Figure.Caption>{capitalizeFirstLetter(pokeData.name)}</Figure.Caption>
    </Figure>
  ));
}

//To capitalize Pokemon name's first letter
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

//Display pokemon as list inside pagination
function PokemonListPage() {
  const pokemonListData = useSelector((state) => state);
  //console.log("Inside PokemonListPage " + JSON.stringify(pokemonListData));
  return (
    <div className="App">
      <h1>Welcome to Pokemon API</h1>
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
