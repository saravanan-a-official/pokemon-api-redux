import * as CommonConstants from "../../common/commonConstants";

const initialState = CommonConstants.INITIAL_STATE;

const reducer = (
  state = initialState,
  action = { type: CommonConstants.LOAD_ALL_POKE_DETAILS, pokeData: {} }
) => {
  switch (action.type) {
    case CommonConstants.LOAD_ALL_POKE_DETAILS:
      return { ...state, action };
    case CommonConstants.GET_ALL_POKE_DATA_OK:
      console.log("CommonConstants.GET_ALL_POKE_DATA_OK");
      console.log(state);
      return { ...state, action };
    case CommonConstants.LOAD_SINGLE_POKE_DETAIL:
      return { ...state, action };
    case CommonConstants.GET_SINGLE_POKE_DATA_OK:
      console.log("CommonConstants.GET_SINGLE_POKE_DATA_OK");
      console.log(state);
      return { ...state, action };
    default:
      return state;
  }
};
export default reducer;
