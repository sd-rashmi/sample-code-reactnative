import { SCAN_FAIL, SCAN_REQUEST, SCAN_SUCCESS } from './constants';

export const scanRequest = (
	token,
	id,
	orderno,
	alertsuccess,
	navigator,
	logo
) => ({
	type: SCAN_REQUEST,
	token,
	id,
	orderno,
	alertsuccess,
	navigator,
	logo
});

export const scanSuccess = (error) => ({
	type: SCAN_SUCCESS,
	error
});
export const scanFail = (error) => ({
	type: SCAN_FAIL,
	error
});
