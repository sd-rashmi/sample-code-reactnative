import { takeEvery, put, call } from "redux-saga/effects";
import { SCAN_FAIL, SCAN_REQUEST, SCAN_SUCCESS } from "./constants";
import axios from "axios";
import { assignqrcodeApi } from "../../Utilities/api";

function* onscanRequested({
  token,
  id,
  orderno,
  alertsuccess,
  navigator,
  logo,
  error,
}) {
  try {
    const Data = yield call(
      axios.post,
      assignqrcodeApi,
      {
        vendor_id: id,
        order_no: orderno,
      },
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (Data.data.status === true) {
      yield put({ type: SCAN_SUCCESS });
      navigator.navigate("Scanned", {
        data: {
          vendor_id: id,
          order_no: orderno,
          logo: logo,
        },
      });
    } else {
      yield put({ type: SCAN_FAIL });
      alertsuccess(Data.data.message);
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: SCAN_FAIL });
      alertsuccess(error.response.data.message);
    } else if (error.request) {
      yield put({ type: SCAN_FAIL });
      alertsuccess(error.toString());
    } else {
      yield put({ type: SCAN_FAIL });
      alertsuccess("something went wrong !");
    }
  }
}

function* sagaLogin() {
  yield takeEvery(SCAN_REQUEST, onscanRequested);
}
export default sagaLogin;
