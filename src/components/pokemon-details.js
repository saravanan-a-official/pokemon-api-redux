import { useSelector } from "react-redux";
import { Figure, Table } from "react-bootstrap";

import * as CommonConstants from "../common/commonConstants";
import SpinnerComponent from "./SpinnerComponent";
function PokemonDetails() {
  const pokemonData = useSelector((state) => state);
  return (
    <div className="App">
      <h1>Pokemon Details page</h1>
      {pokemonData.action.payload ? (
        <>
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
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td>{CommonConstants.boldText("Base Happiness")}</td>
                <td>{pokemonData.action.payload.base_happiness}</td>
                <td>{CommonConstants.boldText("Capture Rate")}</td>
                <td>{pokemonData.action.payload.capture_rate}</td>
              </tr>
              <tr>
                <td>{CommonConstants.boldText("Egg Group")}</td>
                <td>
                  {CommonConstants.returnArrayAsString(
                    pokemonData.action.payload.egg_groups
                  )}
                </td>
                <td>{CommonConstants.boldText("Color")}</td>
                <td>
                  {CommonConstants.capitalizeFirstLetter(
                    pokemonData.action.payload.color.name
                  )}
                </td>
              </tr>
              <tr>
                <td>{CommonConstants.boldText("Generation")}</td>
                <td>{pokemonData.action.payload.generation.name}</td>
                <td>{CommonConstants.boldText("Growth Rate")}</td>
                <td>
                  {CommonConstants.capitalizeFirstLetter(
                    pokemonData.action.payload.growth_rate.name
                  )}
                </td>
              </tr>
              <tr>
                <td>{CommonConstants.boldText("Habitat")}</td>
                <td>
                  {pokemonData.action.payload.habitat !== null
                    ? CommonConstants.capitalizeFirstLetter(
                        pokemonData.action.payload.habitat.name
                      )
                    : "-"}
                </td>
                <td>{CommonConstants.boldText("Capture Rate")}</td>
                <td>{pokemonData.action.payload.capture_rate}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : (
        <SpinnerComponent text="Loading Pokemon data. please wait" />
      )}
    </div>
  );
}

export default PokemonDetails;
