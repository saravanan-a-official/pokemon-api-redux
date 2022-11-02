import axios from "axios";
import * as CommonConstants from "../common/commonConstants";
export function getAllPokeDetails() {
  return axios.get("/pokemon", {
    params: { limit: CommonConstants.POKE_LIMIT },
  });
}

export function getSinglePokeDetails() {
  const pokeId = window.sessionStorage.getItem("pokeId");
  //console.log("pokeId : " + pokeId);
  return axios.get("/pokemon-species/" + pokeId, {});
}
