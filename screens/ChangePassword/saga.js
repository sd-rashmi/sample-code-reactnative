import { takeEvery, put, call } from "redux-saga/effects";
import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
} from "./constants";
import axios from "axios";
import { changepasswordApi } from "../Utilities/api";

function* onchangeRequested({
  currentpassword,
  newpassword,
  alertsuccess,
  navigator,
  token,
  error,
}) {
  try {
    const Data = yield call(
      axios.post,
      changepasswordApi,
      {
        current_password: currentpassword,
        password: newpassword,
        confirm_password: newpassword,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (Data.data.status === true) {
      yield put({ type: CHANGE_PASSWORD_SUCCESS });
      alertsuccess(Data.data.message);
      navigator.goBack();
    } else {
      yield put({ type: CHANGE_PASSWORD_FAIL });
      alertsuccess(Data.data.message);
    }
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      yield put({ type: CHANGE_PASSWORD_FAIL });
      alertsuccess(error.response.data.message);
    } else if (error.request) {
      yield put({ type: CHANGE_PASSWORD_FAIL });
      alertsuccess(error.toString());
    } else {
      yield put({ type: CHANGE_PASSWORD_FAIL });
      alertsuccess("something went wrong !");
    }
  }
}

function* sagaLogin() {
  yield takeEvery(CHANGE_PASSWORD_REQUEST, onchangeRequested);
}
export default sagaLogin;
