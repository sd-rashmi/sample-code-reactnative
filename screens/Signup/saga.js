import { takeEvery, put, call } from "redux-saga/effects";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  VERIFY_MOBILE_FAIL,
  VERIFY_MOBILE_REQUEST,
  VERIFY_MOBILE_SUCCESS,
  RESEND_MOBILE_FAIL,
  RESEND_MOBILE_REQUEST,
  RESEND_MOBILE_SUCCESS,
} from "./constants";
import axios from "axios";
import {
  registerApi,
  verifymobileApi,
  resendmobileApi,
} from "../Utilities/api";

function* onRegisterRequested({
  name,
  mobilenumber,
  email,
  password,
  role,
  alertsuccess,
  navigator,
  businessname,
  abnno,
  countrycode,
  error,
}) {
  try {
    if (role === "1") {
      const Data = yield call(axios.post, registerApi, {
        name: name,
        email: email,
        password: password,
        password_confirmation: password,
        role: role,
        phone_number: mobilenumber,
        country_code: countrycode,
      });
      console.log(Data.data);
      if (Data.data.status === true) {
        yield put({ type: REGISTER_SUCCESS });
        alertsuccess(Data.data.message);
        navigator.navigate("signup-verification", {
          id: Data.data.user.id,
        });
        // navigator.navigate('login');
      } else {
        yield put({ type: REGISTER_FAIL });
        alertsuccess(Data.data.message);
      }
    } else if (role === "2") {
      const Data = yield call(axios.post, registerApi, {
        name: name,
        email: email,
        password: password,
        password_confirmation: password,
        role: role,
        phone_number: mobilenumber,
        business_name: businessname,
        abn: abnno,
        country_code: countrycode,
      });
      console.log(Data.data);
      if (Data.data.status === true) {
        yield put({ type: REGISTER_SUCCESS });
        alertsuccess(Data.data.message);
        navigator.navigate("signup-verification", {
          id: Data.data.user.id,
        });
      } else {
        yield put({ type: REGISTER_FAIL });
        alertsuccess(Data.data.message);
      }
    }
  } catch (error) {
    console.log(error.response);
    if (error.response) {
      yield put({ type: REGISTER_FAIL });
      alertsuccess(error.response.data.message);
    } else if (error.request) {
      yield put({ type: REGISTER_FAIL });
      alertsuccess(error.toString());
    } else {
      yield put({ type: REGISTER_FAIL });
      alertsuccess("something went wrong !");
    }
  }
}

function* onverifyRequested({ userid, otp, alertsuccess, error }) {
  try {
    const Data = yield call(axios.post, verifymobileApi, {
      user_id: userid,
      otp: otp,
    });

    if (Data.data.status === true) {
      yield put({ type: VERIFY_MOBILE_SUCCESS });
      alertsuccess(Data.data.message, "1");
    } else {
      yield put({ type: VERIFY_MOBILE_FAIL });
      alertsuccess(Data.data.message, "0");
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: VERIFY_MOBILE_FAIL });
      alertsuccess(error.response.data.message, "0");
    } else if (error.request) {
      yield put({ type: VERIFY_MOBILE_FAIL });
      alertsuccess(error.toString(), "0");
    } else {
      yield put({ type: VERIFY_MOBILE_FAIL });
      alertsuccess("something went wrong !", "0");
    }
  }
}

function* onresendRequested({ userid, alertsuccess, error }) {
  try {
    const Data = yield call(axios.post, resendmobileApi, {
      user_id: userid,
    });

    if (Data.data.status === true) {
      yield put({ type: RESEND_MOBILE_SUCCESS });
      alertsuccess(Data.data.message, "0");
    } else {
      yield put({ type: RESEND_MOBILE_FAIL });
      alertsuccess(Data.data.message, "0");
    }
  } catch (error) {
    if (error.response) {
      yield put({ type: RESEND_MOBILE_FAIL });
      alertsuccess(error.response.data.message, "0");
    } else if (error.request) {
      yield put({ type: RESEND_MOBILE_FAIL });
      alertsuccess(error.toString(), "0");
    } else {
      yield put({ type: RESEND_MOBILE_FAIL });
      alertsuccess("something went wrong !", "0");
    }
  }
}

function* sagaLogin() {
  yield takeEvery(REGISTER_REQUEST, onRegisterRequested);
  yield takeEvery(VERIFY_MOBILE_REQUEST, onverifyRequested);
  yield takeEvery(RESEND_MOBILE_REQUEST, onresendRequested);
}
export default sagaLogin;
