import * as types from "../../../constants/types";

class siteAction {
	fetchBlogRequest(skip) {
		return {
			type: types.FETCH_BLOG_REQUEST,
			skip,
		};
	}
	fetchBlogSucceeded(blogList, skip) {
		return {
			type: types.FETCH_BLOG_SUCCEEDED,
			payload: { blogList, skip },
		};
	}

	fetchBlogBySlugRequest(slug) {
		return {
			type: types.FETCH_BLOG_BY_SLUG_REQUEST,
			slug,
		};
	}
	fetchBlogBySlugSucceeded(blogDetail) {
		return {
			type: types.FETCH_BLOG_BY_SLUG_SUCCEEDED,
			blogDetail,
		};
	}

	getPostListLength(postListLength) {
		return {
			type: types.GET_POST_LIST_LENGTH,
			postListLength,
		};
	}

	postCommentRequest(comment) {
		return {
			type: types.POST_COMMENT_REQUEST,
			comment,
		};
	}
	postCommentSucceeded(comment) {
		return {
			type: types.POST_COMMENT_SUCCEEDED,
			comment,
		};
	}
}

export default new siteAction();
