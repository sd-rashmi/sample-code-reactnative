import {
	REGISTER_REQUEST,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	VERIFY_MOBILE_FAIL,
	VERIFY_MOBILE_REQUEST,
	VERIFY_MOBILE_SUCCESS,
	RESEND_MOBILE_FAIL,
	RESEND_MOBILE_REQUEST,
	RESEND_MOBILE_SUCCESS
} from './constants';

export const RegisterRequest = (
	name,
	mobilenumber,
	email,
	password,
	role,
	alertsuccess,
	navigator,
	businessname,
	abnno,
	countrycode
) => ({
	type: REGISTER_REQUEST,
	name,
	mobilenumber,
	email,
	password,
	role,
	alertsuccess,
	navigator,
	businessname,
	abnno,
	countrycode
});

export const RegisterSuccess = (error) => ({
	type: REGISTER_SUCCESS,
	error
});
export const RegisterFail = (error) => ({
	type: REGISTER_FAIL,
	error
});

export const verifyRequest = (userid, otp, alertsuccess) => ({
	type: VERIFY_MOBILE_REQUEST,
	userid,
	otp,
	alertsuccess
});

export const verifySuccess = (error) => ({
	type: VERIFY_MOBILE_SUCCESS,
	error
});
export const verifyFail = (error) => ({
	type: VERIFY_MOBILE_FAIL,
	error
});

export const resendRequest = (userid, alertsuccess) => ({
	type: RESEND_MOBILE_REQUEST,
	userid,
	alertsuccess
});

export const resendSuccess = (error) => ({
	type: RESEND_MOBILE_SUCCESS,
	error
});
export const resendFail = (error) => ({
	type: RESEND_MOBILE_FAIL,
	error
});
