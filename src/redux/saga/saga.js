import { call, put, takeLatest } from "redux-saga/effects";
import * as CommonConstants from "../../common/commonConstants";
import * as api from "../../api/pokeDetails";

function* formDataSaga() {
  //console.log("inside formDataSaga");
  yield takeLatest(CommonConstants.LOAD_POKE_DETAILS, pushDataToStore);
}

function* pushDataToStore(action) {
  //console.log("inside pushDataToStore");
  const pokeDetails = yield call(api.getPokeDetails, "");
  yield put({
    type: CommonConstants.GET_POKE_DATA_OK,
    payload: pokeDetails.data.results,
  });
}

export default formDataSaga;
