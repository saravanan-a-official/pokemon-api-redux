import * as CommonConstants from "../../common/commonConstants";
export function getPokeDataOk(pokeData) {
  console.log("Inside action getPokeDataOk");
  return { type: CommonConstants.LOAD_POKE_DETAILS, pokeData };
}
