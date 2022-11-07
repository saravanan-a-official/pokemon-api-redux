import axios from "axios";
import * as CommonConstants from "../common/commonConstants";
export function getAllPokeDetails() {
  return axios.get("/pokemon", {
    params: { limit: CommonConstants.POKE_LIMIT },
  });
}

export function getSinglePokeDetails() {
  let pokeId = window.sessionStorage.getItem("pokeId");
  if (pokeId === "" || pokeId === null) {
    pokeId = 1;
    console.log("Data not available in session. Hence getting default data");
  }
  return axios.get("/pokemon-species/" + pokeId, {});
}
