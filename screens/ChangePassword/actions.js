import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
} from "./constants";

export const changepasswordRequest = (
  currentpassword,
  newpassword,
  alertsuccess,
  navigator,
  token
) => ({
  type: CHANGE_PASSWORD_REQUEST,
  currentpassword,
  newpassword,
  alertsuccess,
  navigator,
  token,
});

export const changepasswordSuccess = (error) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  error,
});
export const changepasswordFail = (error) => ({
  type: CHANGE_PASSWORD_FAIL,
  error,
});
