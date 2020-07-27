import { takeEvery, takeLatest, call, put, select } from "redux-saga/effects";

import * as types from "../../constants/types";
import authService from "../../services/authService";
import cookieLocal from "../../helper/cookieLocal";

import utilAction from "../redux/actions/utilAction";
import authAction from "../redux/actions/authAction";
import errorAction from "../redux/actions/errorAction";

function* loginUser({ loginForm }) {
	yield put(utilAction.loadingData({ name: "loginUser", loading: true }));
	try {
		const response = yield authService.login(loginForm);
		yield cookieLocal.saveToCookie("token", response.id);
		yield cookieLocal.saveToLocal("user", response);
		yield call(checkAuthenticated);
		yield call(getUser);
		yield put(utilAction.loadedData("loginUser"));
		yield put(errorAction.clearError("loginUser"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "loginUser", error: error.response.data.error }));
		yield call(checkAuthenticated);
	}
}

function* registerUser({ registerForm }) {
	yield put(utilAction.loadingData({ name: "registerUser", loading: true }));
	try {
		yield authService.register(registerForm);
		yield call(loginUser, { loginForm: { email: registerForm.email, password: registerForm.password } });
		yield put(utilAction.loadedData("registerUser"));
		yield put(errorAction.clearError("registerUser"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "registerUser", error: error.response.data.error }));
	}
}

function* getUser() {
	yield put(utilAction.loadingData({ name: "getUser", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const { userId } = yield cookieLocal.getFromLocal("user");
		const response = yield authService.getUser(userId, token);
		yield put(authAction.getUserSucceeded(response));
		yield put(utilAction.loadedData("getUser"));
		yield put(errorAction.clearError("getUser"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "getUser", error: error.response.data.error }));
	}
}

function* checkAuthenticated() {
	const token = yield cookieLocal.getFromCookie("token");
	if (token !== undefined) {
		yield put(authAction.checkAuthenticatedSucceeded());
	} else {
		yield put(authAction.checkAuthenticatedFailed());
		yield cookieLocal.removeFromCookie("token");
		yield cookieLocal.removeFromLocal("user");
	}
}

export default function* () {
	yield takeLatest(types.LOGIN_USER_REUQUEST, loginUser);
	yield takeLatest(types.REGISTER_USER_REUQUEST, registerUser);
	yield takeEvery(types.CHECK_AUTHENTICATION_REQUEST, checkAuthenticated);
	yield takeLatest(types.GET_USER_REQUEST, getUser);
}
