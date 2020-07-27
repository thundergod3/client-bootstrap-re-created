import HTTPMethod from "./index";

class adminService {
	getAllUser = (token) => HTTPMethod.get(`/users?access_token=${token}`).then((res) => res.data);

	fetchPost = (token) => HTTPMethod.get(`/Posts?access_token=${token}`).then((res) => res.data);

	fetchSinglePost = (token, id) =>
		HTTPMethod.get(`/Posts/${id}?access_token=${token}`, {
			params: {
				filter: {
					include: "PostImage",
				},
			},
		}).then((res) => res.data);

	addPost = (newPost, token) => HTTPMethod.post(`/Posts?access_token=${token}`, newPost).then((res) => res.data);

	editPost = (token, id, post) => HTTPMethod.put(`/Posts/${id}?access_token=${token}`, post).then((res) => res.data);

	uploadImage = (postId, userId, token, data) =>
		HTTPMethod.post(`/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`, data).then(
			(res) => res.data
		);
}

export default new adminService();
