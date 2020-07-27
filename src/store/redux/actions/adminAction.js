import * as types from "../../../constants/types";

class adminAction {
	fetchAllUSerRequest() {
		return {
			type: types.FETCH_ALL_USER_REQUEST,
		};
	}
	fetchAllUSerSucceeded(allUser) {
		return {
			type: types.FETCH_ALL_USER_SUCCEEDED,
			allUser,
		};
	}

	fetchPostRequest() {
		return {
			type: types.FETCH_POST_REQUEST,
		};
	}
	fetchPostSucceeded(postData) {
		return {
			type: types.FETCH_POST_SUCCEEDED,
			postData,
		};
	}

	fetchSinglePostRequest(id) {
		return {
			type: types.FETCH_SINGLE_POST_REQUEST,
			id,
		};
	}
	fetchSinglePostSucceeded(postItem) {
		return {
			type: types.FETCH_SINGLE_POST_SUCCEEDED,
			postItem,
		};
	}

	clearSinglePost() {
		return {
			type: types.CLEAR_SINGLE_ITEM,
		};
	}

	addPostRequest(newPost) {
		return {
			type: types.ADD_POST_REQUEST,
			newPost,
		};
	}
	addPostSucceeded(newPost) {
		return {
			type: types.ADD_POST_SUCCEDED,
			newPost,
		};
	}

	editPostRequest(id, editPost) {
		return {
			type: types.EDIT_POST_REQUEST,
			payload: { id, editPost },
		};
	}
	editPostSucceeded(editPost) {
		return {
			type: types.EDIT_POST_SUCCEDED,
			editPost,
		};
	}

	uploadImageRequest(id, dataImage) {
		return {
			type: types.UPLOAD_IMAGE_REQUEST,
			payload: { id, dataImage },
		};
	}
	uploadImageSucceeded(dataImage) {
		return {
			type: types.UPLOAD_IMAGE_SUCCEEDED,
			dataImage,
		};
	}
}

export default new adminAction();
