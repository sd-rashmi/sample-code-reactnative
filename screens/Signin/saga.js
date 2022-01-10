import { takeEvery, put, call } from 'redux-saga/effects';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './constants';
import axios from 'axios';
import { loginApi } from '../Utilities/api';
import AsyncStorageUtil from '../Utilities/AsyncStorage';
import moment from 'moment';

function* onLoginRequested({
	email,
	password,
	alertsuccess,
	navigator,
	error
}) {
	try {
		const Data = yield call(axios.post, loginApi, {
			email: email,
			password: password
		});
		if (Data.data.status === true && Data.data.user.role === 'customer') {
			const one = moment().format('DD/MM/YYYY HH:mm:ss').valueOf();
			const two = moment(Data.data.user.created_at)
				.format('DD/MM/YYYY HH:mm:ss')
				.valueOf();
			if (one > two) {
				yield call(AsyncStorageUtil.storetoken, Data);
				yield put({ type: LOGIN_SUCCESS });
				navigator.navigate('customer');
			} else {
				yield call(AsyncStorageUtil.storetoken, Data);
				yield put({ type: LOGIN_SUCCESS });
				navigator.navigate('Intro', { type: 'customer' });
			}
		} else if (Data.data.status === true && Data.data.user.role === 'vendor') {
			const one = moment().format('DD/MM/YYYY HH:mm:ss').valueOf();
			const two = moment(Data.data.user.created_at)
				.format('DD/MM/YYYY HH:mm:ss')
				.valueOf();
			console.log(one);
			console.log(two);
			if (one > two) {
				yield call(AsyncStorageUtil.storetoken, Data);
				yield put({ type: LOGIN_SUCCESS });
				navigator.navigate('vendor-screen', { screen: 'Queue' });
			} else {
				yield call(AsyncStorageUtil.storetoken, Data);
				yield put({ type: LOGIN_SUCCESS });
				navigator.navigate('Intro', { type: 'vendor' });
			}
		} else {
			yield put({ type: LOGIN_FAIL });
			alertsuccess(Data.data.message);
		}
	} catch (error) {
		console.log(error.response);
		console.log(error.request);
		if (error.response) {
			if (error.response.data.message === 'Phone number is not verified') {
				yield put({ type: LOGIN_FAIL });
				navigator.navigate('signup-verification', {
					id: error.response.data.user_id
				});
			} else {
				yield put({ type: LOGIN_FAIL });
				alertsuccess(error.response.data.message);
			}
		} else if (error.request) {
			yield put({ type: LOGIN_FAIL });
			alertsuccess(error.toString());
		} else {
			yield put({ type: LOGIN_FAIL });
			alertsuccess('something went wrong !');
		}
	}
}

function* sagaLogin() {
	yield takeEvery(LOGIN_REQUEST, onLoginRequested);
}
export default sagaLogin;
