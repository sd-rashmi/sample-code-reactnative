import {
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
} from "./constants";

export const forgotpasswordRequest = (email, alertsuccess) => ({
  type: FORGOT_PASSWORD_REQUEST,
  email,
  alertsuccess,
});

export const forgotpasswordSuccess = (error) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  error,
});
export const forgotpasswordFail = (error) => ({
  type: FORGOT_PASSWORD_FAIL,
  error,
});
