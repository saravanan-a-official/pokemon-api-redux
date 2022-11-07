import { useSelector } from "react-redux";
import { Figure, Table } from "react-bootstrap";

import * as CommonConstants from "../common/commonConstants";
import SpinnerComponent from "./spinner-component";

import "../styles/App.css";

function PokemonDetails() {
  const pokemonData = useSelector((state) => state);

  return (
    <div className="App">
      <h1>Pokémon Details page</h1>
      {pokemonData.action ? (
        pokemonData.action.payload ? (
          <div>
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
            <h1>
              {CommonConstants.capitalizeFirstLetter(
                pokemonData.action.payload.name
              )}
            </h1>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td className="cell-background">
                    {CommonConstants.boldText("Pokedex Number")}
                  </td>
                  <td>
                    {pokemonData.action.payload.pokedex_numbers[0].entry_number}
                  </td>
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
                  <td>{CommonConstants.boldText("Generation")}</td>
                  <td>
                    {CommonConstants.formatGenerationText(
                      pokemonData.action.payload.generation.name
                    )}
                  </td>
                </tr>
                <tr>
                  <td>{CommonConstants.boldText("Growth Rate")}</td>
                  <td>
                    {CommonConstants.capitalizeFirstLetter(
                      pokemonData.action.payload.growth_rate.name
                    )}
                  </td>
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
                <tr>
                  <td>{CommonConstants.boldText("Shape")}</td>
                  <td>
                    {pokemonData.action.payload.habitat !== null
                      ? CommonConstants.capitalizeFirstLetter(
                          pokemonData.action.payload.shape.name
                        )
                      : "-"}
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </Table>
          </div>
        ) : (
          <SpinnerComponent text="Loading Pokemon data. please wait" />
        )
      ) : (
        <SpinnerComponent text="Loading Pokemon data. please wait" />
      )}
    </div>
  );
}

export default PokemonDetails;
