import { Figure, OverlayTrigger, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import * as CommonConstants from "../common/commonConstants";

//To capitalize Pokemon name's first letter

function PokemonDetailsOverlay(props) {
  const triggerDispatch = (event) => {
    //console.log("event passed :" + event);
    window.sessionStorage.setItem("pokeId", +event + 1);
  };
  return (
    <OverlayTrigger
      key={props.id}
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Card style={{ width: "10rem" }} key={props.id}>
          <Card.Img
            variant="top"
            src={
              CommonConstants.POKE_IMG_URL +
              (+props.id + 1) +
              CommonConstants.POKE_IMG_EXT
            }
          />
          <Card.Body>
            <Card.Title>
              {CommonConstants.capitalizeFirstLetter(props.pokedata.name)}
            </Card.Title>
            {/*  <Card.Text>This is a Pokemon</Card.Text> 
            <Button variant="primary">
              {CommonConstants.MORE_DETAILS_BTN}
            </Button>*/}
          </Card.Body>
        </Card>
      }
    >
      <Link to="/pokemonDetails/" onClick={() => triggerDispatch(props.id)}>
        <Figure key={props.id}>
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
    </OverlayTrigger>
  );
}
export default PokemonDetailsOverlay;
