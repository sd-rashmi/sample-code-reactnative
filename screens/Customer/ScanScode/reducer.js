import { SCAN_FAIL, SCAN_REQUEST, SCAN_SUCCESS } from './constants';

const INITIAL_STATE = {
	loading: false,
	error: null
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SCAN_REQUEST:
			return {
				...state,
				loading: true
			};
		case SCAN_SUCCESS:
			return {
				...state,
				loading: false,
				error: action.error
			};
		case SCAN_FAIL:
			return {
				...state,
				loading: false,
				error: action.error
			};
		default:
			return state;
	}
};
