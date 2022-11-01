import * as CommonConstants from "../../common/commonConstants";

const initialState = CommonConstants.INITIAL_STATE;

const reducer = (
  state = initialState,
  action = { type: CommonConstants.LOAD_POKE_DETAILS, pokeData: {} }
) => {
  console.log("-----------------------------------------");
  console.log("action.type ::: " + JSON.stringify(action));
  switch (action.type) {
    case CommonConstants.LOAD_POKE_DETAILS:
      console.log(
        "LOAD_POKE_DETAILS: action.payload :: " + JSON.stringify(action.payload)
      );
      return { ...state, action };
    case CommonConstants.GET_POKE_DATA_OK:
      console.log(
        "GET_POKE_DATA_OK: action.payload :: " + JSON.stringify(action.payload)
      );
      return { ...state, action };
    default:
      console.log("default state: " + JSON.stringify(state));
      return state;
  }
};
export default reducer;
