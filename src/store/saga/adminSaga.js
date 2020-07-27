import { takeEvery, takeLatest, call, put, select, delay } from "redux-saga/effects";

import * as types from "../../constants/types";
import adminAction from "../redux/actions/adminAction";
import utilAction from "../redux/actions/utilAction";
import errorAction from "../redux/actions/errorAction";

import adminService from "../../services/adminService";

import cookieLocal from "../../helper/cookieLocal";
import history from "../../constants/history";

function* fetchAllUser() {
	yield put(utilAction.loadingData({ name: "fetchAllUser", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const response = yield adminService.getAllUser(token);
		yield put(adminAction.fetchAllUSerSucceeded(response));
		yield put(utilAction.loadedData("fetchAllUser"));
		yield put(errorAction.clearError("fetchAllUser"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "fetchAllUser", error: error.response.data.error }));
	}
}

function* fetchPost() {
	yield put(utilAction.loadingData({ name: "fetchPost", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const response = yield adminService.fetchPost(token);
		yield put(adminAction.fetchPostSucceeded(response));
		yield put(utilAction.loadedData("fetchPost"));
		yield put(errorAction.clearError("fetchPost"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "fetchPost", error: error.response.data.error }));
	}
}

function* fetchPostItem({ id }) {
	yield put(utilAction.loadingData({ name: "fetchPostItem", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const response = yield adminService.fetchSinglePost(token, id);
		yield put(adminAction.fetchSinglePostSucceeded(response));
		yield put(utilAction.loadedData("fetchPostItem"));
		yield put(errorAction.clearError("fetchPostItem"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "fetchPostItem", error: error.response.data.error }));
	}
}

function* addPost({ newPost }) {
	yield put(utilAction.loadingData({ name: "addPost", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const response = yield adminService.addPost(newPost, token);
		yield put(adminAction.addPostSucceeded(response));
		yield put(utilAction.loadedData("addPost"));
		yield history.push(`/admin/Posts/edit/${response.id}`);
		yield put(errorAction.clearError("addPost"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "addPost", error: error.response.data.error }));
	}
}

function* editPost({ payload: { id, editPost } }) {
	yield put(utilAction.loadingData({ name: "editPost", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const response = yield adminService.editPost(token, id, editPost);
		console.log(response);
		yield put(adminAction.editPostSucceeded(response));
		yield put(utilAction.loadedData("editPost"));
		yield history.push("/admin");
		yield put(errorAction.clearError("editPost"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "editPost", error: error.response.data.error }));
	}
}

function* uploadImage({ payload: { id, dataImage } }) {
	yield put(utilAction.loadingData({ name: "uploadImage", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const {
			authReducer: {
				userData: { id: userId },
			},
		} = yield select((state) => state);
		const response = yield adminService.uploadImage(id, userId, token, dataImage);
		yield put(adminAction.uploadImageSucceeded(response));
		yield put(utilAction.loadedData("uploadImage"));
		yield put(errorAction.clearError("uploadImage"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "uploadImage", error: error.response.data.error }));
	}
}

export default function* adminSaga() {
	yield takeLatest(types.FETCH_ALL_USER_REQUEST, fetchAllUser);
	yield takeLatest(types.FETCH_POST_REQUEST, fetchPost);
	yield takeLatest(types.FETCH_SINGLE_POST_REQUEST, fetchPostItem);
	yield takeLatest(types.ADD_POST_REQUEST, addPost);
	yield takeLatest(types.EDIT_POST_REQUEST, editPost);
	yield takeLatest(types.UPLOAD_IMAGE_REQUEST, uploadImage);
}
