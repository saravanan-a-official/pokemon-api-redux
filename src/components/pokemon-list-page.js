import { useSelector } from "react-redux";

import PokemonListPagination from "./pokemon-list-pagination";
import SpinnerComponent from "./spinner-component";
import "bootstrap/dist/css/bootstrap.min.css";
import { Figure, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as CommonConstants from "../common/commonConstants";

//Display pokemon as list inside pagination
function PokemonListPage() {
  const pokemonListData = useSelector((state) => state);
  return (
    <div className="App">
      <h1>Pokémon API</h1>
      {pokemonListData.action.payload ? (
        PaginatePokemonFigureList(pokemonListData)
      ) : (
        <h1>
          <SpinnerComponent text="Fetching Pokemon data....." />
        </h1>
      )}
    </div>
  );
}

//Invokes component and displays Pokemon Figure list with Pagination
function PaginatePokemonFigureList(pokemonListData) {
  const pokemonFigureListData = iteratePokemonData(pokemonListData);
  //console.log(pokemonFigureListData);
  return (
    <PokemonListPagination
      pokeFigureData={pokemonFigureListData}
    ></PokemonListPagination>
  );
}

//Returns Pokemon data as a Figure HTML
function iteratePokemonData(pokemonListData) {
  return pokemonListData.action.payload.map((pokeData, id) => {
    const pokeBio = pokemonDetailsOverlay({ pokedata: pokeData, id: id });

    return pokeBio;
  });
}

//Returns overlay html for each pokemon.
function pokemonDetailsOverlay(pokemonData) {
  const triggerDispatch = (event) => {
    window.sessionStorage.setItem("pokeId", +event + 1);
  };

  const overlayCardData = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">
        {CommonConstants.capitalizeFirstLetter(pokemonData.pokedata.name)}
      </Popover.Header>
    </Popover>
  );

  const pokeBioOVerlay = (
    <OverlayTrigger
      key={"overlay-" + pokemonData.id}
      placement="right"
      /* delay={{
        show: CommonConstants.OVERLAY_SHOW_DELAY,
        hide: CommonConstants.OVERLAY_HIDE_DELAY,
      }} */
      overlay={overlayCardData}
    >
      <Link
        key={"link-" + pokemonData.id}
        to="/pokemonDetails/"
        onClick={() => triggerDispatch(pokemonData.id)}
      >
        <Figure key={"figure-" + pokemonData.id}>
          <Figure.Image
            width={CommonConstants.POKE_IMG_SIZE}
            height={CommonConstants.POKE_IMG_SIZE}
            alt={pokemonData.pokedata.name}
            src={
              CommonConstants.POKE_IMG_URL +
              (+pokemonData.id + 1) +
              CommonConstants.POKE_IMG_EXT
            }
          />
          <Figure.Caption>
            {CommonConstants.capitalizeFirstLetter(pokemonData.pokedata.name)}
          </Figure.Caption>
        </Figure>
      </Link>
    </OverlayTrigger>
  );
  return pokeBioOVerlay;
}

export default PokemonListPage;
