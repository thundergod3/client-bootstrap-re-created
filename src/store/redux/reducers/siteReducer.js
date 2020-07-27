import * as types from "../../../constants/types";

const initialState = {
	blogList: [],
	blogDetail: {},
	postCount: 0,
};

const siteReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_BLOG_SUCCEEDED: {
			return {
				...state,
				blogList: action.payload.skip
					? state.blogList.concat(action.payload.blogList)
					: action.payload.blogList,
			};
		}

		case types.FETCH_BLOG_BY_SLUG_SUCCEEDED: {
			return {
				...state,
				blogDetail: action.blogDetail,
			};
		}

		case types.GET_POST_LIST_LENGTH: {
			return {
				...state,
				postCount: action.postListLength,
			};
		}

		case types.POST_COMMENT_SUCCEEDED: {
			return {
				...state,
				blogDetail: {
					...state.blogDetail,
					Comments: [...state.blogDetail.Comments, action.comment],
				},
			};
		}

		default: {
			return state;
		}
	}
};

export default siteReducer;
