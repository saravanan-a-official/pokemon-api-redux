import axios from "axios";
import * as CommonConstants from "../common/commonConstants";
export function getPokeDetails() {
  return axios.get("/pokemon", {
    params: { limit: CommonConstants.POKE_LIMIT },
  });
}
