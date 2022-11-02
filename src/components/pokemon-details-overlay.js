import { Figure, OverlayTrigger, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import * as CommonConstants from "../common/commonConstants";

//To capitalize Pokemon name's first letter
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
function PokemonDetailsOverlay(props) {
  return (
    <OverlayTrigger
      key={this.props.id}
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Card style={{ width: "10rem" }} key={this.props.id}>
          <Card.Img
            variant="top"
            src={
              CommonConstants.POKE_IMG_URL +
              (+this.props.id + 1) +
              CommonConstants.POKE_IMG_EXT
            }
          />
          <Card.Body>
            <Card.Title>
              {capitalizeFirstLetter(this.props.pokeData.name)}
            </Card.Title>
            {/*  <Card.Text>This is a Pokemon</Card.Text> */}
            <Button variant="primary">More Details</Button>
          </Card.Body>
        </Card>
      }
    >
      <Figure key={this.props.id}>
        <Figure.Image
          width={CommonConstants.POKE_IMG_SIZE}
          height={CommonConstants.POKE_IMG_SIZE}
          alt={this.props.pokeData.name}
          src={
            CommonConstants.POKE_IMG_URL +
            (+this.props.id + 1) +
            CommonConstants.POKE_IMG_EXT
          }
        />
        <Figure.Caption>
          {capitalizeFirstLetter(this.props.pokeData.name)}
        </Figure.Caption>
      </Figure>
    </OverlayTrigger>
  );
}
export default PokemonDetailsOverlay;
