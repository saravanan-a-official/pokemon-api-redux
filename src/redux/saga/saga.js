import { call, put, takeLatest, all } from "redux-saga/effects";
import * as CommonConstants from "../../common/commonConstants";
import * as api from "../../api/pokeDetails";

function* getPokeDataWatcher() {
  yield all([
    takeLatest(
      CommonConstants.LOAD_SINGLE_POKE_DETAIL,
      pushSinglePokeDataToStore
    ),
    takeLatest(CommonConstants.LOAD_ALL_POKE_DETAILS, pushAllPokeDataToStore),
  ]);
}

function* pushAllPokeDataToStore(action) {
  const pokeDetails = yield call(api.getAllPokeDetails, "");
  yield put({
    type: CommonConstants.GET_ALL_POKE_DATA_OK,
    payload: pokeDetails.data.results,
  });
}

function* pushSinglePokeDataToStore(action) {
  const pokeDetails = yield call(api.getSinglePokeDetails, "");
  console.log(pokeDetails.data);
  yield put({
    type: CommonConstants.GET_SINGLE_POKE_DATA_OK,
    payload: pokeDetails.data,
  });
}

export default getPokeDataWatcher;
