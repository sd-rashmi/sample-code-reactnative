import { takeEvery, put, call } from "redux-saga/effects";
import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from "./constants";
import axios from "axios";
import { forgotpasswordApi } from "../Utilities/api";
function* onforgotRequested({ email, alertsuccess, error }) {
  try {
    const Data = yield call(axios.post, forgotpasswordApi, {
      email: email,
    });
    if (Data.data.status === true) {
      yield put({ type: FORGOT_PASSWORD_SUCCESS });
      alertsuccess(Data.data.message);
    } else {
      yield put({ type: FORGOT_PASSWORD_FAIL });
      alertsuccess(Data.data.message);
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: FORGOT_PASSWORD_FAIL });
      alertsuccess(error.response.data.message);
    } else if (error.request) {
      yield put({ type: FORGOT_PASSWORD_FAIL });
      alertsuccess(error.toString());
    } else {
      yield put({ type: FORGOT_PASSWORD_FAIL });
      alertsuccess("something went wrong !");
    }
  }
}

function* sagaLogin() {
  yield takeEvery(FORGOT_PASSWORD_REQUEST, onforgotRequested);
}
export default sagaLogin;
