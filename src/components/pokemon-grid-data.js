import { Figure, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";

import * as CommonConstants from "../common/commonConstants";

function PokemonGridData(props) {
  return iteratePokemonData(props.pokemonData);
}
//Returns Pokemon data as a Figure HTML
function iteratePokemonData(pokemonListData) {
  return pokemonListData.map((pokeData, id) => {
    const pokeBio = pokemonDetailsOverlay({
      pokedata: pokeData,
      id: CommonConstants.findPokedexId(pokeData.url) - 1,
    });

    return pokeBio;
  });
}

//Returns overlay html for each pokemon.
function pokemonDetailsOverlay(pokemonData) {
  const triggerDispatch = (event) => {
    window.sessionStorage.setItem("pokeId", +event + 1);
    window.sessionStorage.setItem("activePageNum", +this.state.activePageNum);
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

export default PokemonGridData;
