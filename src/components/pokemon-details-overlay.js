import { Figure, OverlayTrigger, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import * as CommonConstants from "../common/commonConstants";

//To capitalize Pokemon name's first letter

function PokemonDetailsOverlay(props) {
  const triggerDispatch = (event) => {
    window.sessionStorage.setItem("pokeId", +event + 1);
  };
  const pokeBioOVerlay = (
    <Link
      key={"link-" + props.id}
      to="/pokemonDetails/"
      onClick={() => triggerDispatch(props.id)}
    >
      <Figure key={"figure-" + props.id}>
        <Figure.Image
          width={CommonConstants.POKE_IMG_SIZE}
          height={CommonConstants.POKE_IMG_SIZE}
          alt={props.pokedata.name}
          src={
            CommonConstants.POKE_IMG_URL +
            (+props.id + 1) +
            CommonConstants.POKE_IMG_EXT
          }
        />
        <Figure.Caption>
          {CommonConstants.capitalizeFirstLetter(props.pokedata.name)}
        </Figure.Caption>
      </Figure>
    </Link>
  );
  if (props.id === 0) {
    console.log("PokemonDetailsOverlay");
    console.log(pokeBioOVerlay);
  }
  return pokeBioOVerlay;
}
export default PokemonDetailsOverlay;
