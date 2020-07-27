import * as types from "../../../constants/types";

const initialState = {
	usersList: [],
	postsList: [],
	postItem: {},
};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_ALL_USER_SUCCEEDED: {
			return {
				...state,
				usersList: action.allUser,
			};
		}

		case types.FETCH_SINGLE_POST_SUCCEEDED: {
			return {
				...state,
				postItem: action.postItem,
			};
		}

		case types.CLEAR_SINGLE_ITEM: {
			return {
				...state,
				postItem: {},
			};
		}

		case types.FETCH_POST_SUCCEEDED: {
			return {
				...state,
				postsList: action.postData,
			};
		}

		case types.ADD_POST_SUCCEDED: {
			return {
				...state,
				postsList: [...state.postsList, action.newPost],
			};
		}

		case types.EDIT_POST_SUCCEDED: {
			return {
				...state,
				postsList: state.postsList.map((post) => (post.id === action.editPost.id ? action.editPost : post)),
				postItem: action.editPost,
			};
		}

		case types.UPLOAD_IMAGE_SUCCEEDED: {
			return {
				...state,
				postItem: { ...state.postItem, PostImage: [...state.postItem.PostImage, action.dataImage] },
				postsList: state.postsList.map((post) =>
					post.id === state.postItem.id
						? { ...state.postItem, PostImage: [...state.postItem.PostImage, action.dataImage] }
						: post
				),
			};
		}

		default: {
			return state;
		}
	}
};

export default adminReducer;
