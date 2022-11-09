import axios from "axios";
import * as CommonConstants from "../common/commonConstants";
export async function getAllPokeDetails() {
  return await axios.get("/pokemon", {
    params: { limit: CommonConstants.POKE_LIMIT },
  });
}

export async function getSinglePokeDetails() {
  let pokeId = window.sessionStorage.getItem("pokeId");
  if (pokeId === "" || pokeId === null) {
    pokeId = 1;
    console.log("Data not available in session. Hence getting default data");
  }
  return await axios.get("/pokemon-species/" + pokeId, {});
}
