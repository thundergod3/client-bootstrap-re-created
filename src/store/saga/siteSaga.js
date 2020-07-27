import { takeEvery, takeLatest, call, put, select } from "redux-saga/effects";

import * as types from "../../constants/types";
import siteService from "../../services/siteService";
import cookieLocal from "../../helper/cookieLocal";

import siteAction from "../redux/actions/siteAction";
import utilAction from "../redux/actions/utilAction";
import errorAction from "../redux/actions/errorAction";

function* fetchBlog({ skip }) {
	yield put(utilAction.loadingData({ name: "fetchBlog", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const response = yield siteService.fetchBlog(token, skip);
		yield put(siteAction.fetchBlogSucceeded(response, skip));
		yield call(getPostListLength);
		yield put(utilAction.loadedData("fetchBlog"));
		yield put(errorAction.clearError("fetchBlog"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "fetchBlog", error: error.response.data.error }));
	}
}

function* fetchBlogBySlug({ slug }) {
	yield put(utilAction.loadingData({ name: "fetchBlogBySlug", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const response = yield siteService.fetchBlogBySlug(slug, token);
		yield put(siteAction.fetchBlogBySlugSucceeded(response));
		yield put(utilAction.loadedData("fetchBlogBySlug"));
		yield put(errorAction.clearError("fetchBlogBySlug"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "fetchBlogBySlug", error: error.response.data.error }));
	}
}

function* getPostListLength() {
	try {
		const response = yield siteService.getPostListLength();
		yield put(siteAction.getPostListLength(response.count));
	} catch (error) {
		console.log(error);
	}
}

function* postComment({ comment }) {
	yield put(utilAction.loadingData({ name: "postComment", loading: true }));

	try {
		const token = yield cookieLocal.getFromCookie("token");
		const response = yield siteService.postComment(token, comment);
		yield put(siteAction.postCommentSucceeded(response));
		yield put(utilAction.loadedData("postComment"));
		yield put(errorAction.clearError("postComment"));
	} catch (error) {
		console.log(error);
		yield put(errorAction.getError({ name: "postComment", error: error.response.data.error }));
	}
}

export default function* () {
	yield takeLatest(types.FETCH_BLOG_REQUEST, fetchBlog);
	yield takeLatest(types.FETCH_BLOG_BY_SLUG_REQUEST, fetchBlogBySlug);
	yield takeLatest(types.POST_COMMENT_REQUEST, postComment);
}
