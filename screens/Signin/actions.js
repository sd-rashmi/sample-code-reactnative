import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './constants';

export const loginRequest = (email, password, alertsuccess, navigator) => ({
	type: LOGIN_REQUEST,
	email,
	password,
	alertsuccess,
	navigator
});

export const loginSuccess = (error) => ({
	type: LOGIN_SUCCESS,
	error
});
export const loginFail = (error) => ({
	type: LOGIN_FAIL,
	error
});
