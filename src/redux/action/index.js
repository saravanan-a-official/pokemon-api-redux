import * as CommonConstants from "../../common/commonConstants";
//Used to invoke fetch all poke data saga
export function getAllPokeDataOk(pokeData) {
  return { type: CommonConstants.LOAD_ALL_POKE_DETAILS, pokeData };
}

//Used to invoke fetch single poke data saga
export function getSinglePokeDetail(pokeData) {
  return { type: CommonConstants.LOAD_SINGLE_POKE_DETAIL, pokeData };
}
