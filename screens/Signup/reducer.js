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

const INITIAL_STATE = {
	loading: false,
	error: null
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case REGISTER_REQUEST:
			return {
				...state,
				loading: true
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case REGISTER_FAIL:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case VERIFY_MOBILE_REQUEST:
			return {
				...state,
				loading: true
			};
		case VERIFY_MOBILE_SUCCESS:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case VERIFY_MOBILE_FAIL:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case RESEND_MOBILE_REQUEST:
			return {
				...state,
				loading: true
			};
		case RESEND_MOBILE_SUCCESS:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case RESEND_MOBILE_FAIL:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
};
