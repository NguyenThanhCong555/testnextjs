import { profileSagaNews } from "./slice/getItemsNews/saga";
import { profileSaga } from "./slice/getNewsItemList/saga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([profileSaga(), profileSagaNews()]);
}
