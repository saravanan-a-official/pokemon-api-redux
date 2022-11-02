import { useSelector } from "react-redux";
import { Figure } from "react-bootstrap";

import * as CommonConstants from "../common/commonConstants";
import SpinnerComponent from "./SpinnerComponent";
function PokemonDetails() {
  const pokemonData = useSelector((state) => state);
  //console.log(pokemonData);
  //console.log(pokemonData.action.payload);
  return (
    <div className="App">
      <h1>Pokemon Details page</h1>
      {pokemonData.action.payload ? (
        <Figure key={pokemonData.action.payload.id}>
          <Figure.Image
            width={CommonConstants.POKE_IMG_SIZE}
            height={CommonConstants.POKE_IMG_SIZE}
            alt={pokemonData.action.payload.name}
            src={
              CommonConstants.POKE_IMG_URL +
              +pokemonData.action.payload.id +
              CommonConstants.POKE_IMG_EXT
            }
          />
          <Figure.Caption>
            {CommonConstants.capitalizeFirstLetter(
              pokemonData.action.payload.name
            )}
          </Figure.Caption>
        </Figure>
      ) : (
        <SpinnerComponent text="Loading Pokemon data. please wait" />
      )}
    </div>
  );
}

export default PokemonDetails;
