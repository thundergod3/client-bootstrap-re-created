import HTTPMethod from "./index";

class siteService {
	fetchBlog = (token, skip) =>
		HTTPMethod.get(`/Posts?access_token=${token}`, {
			params: {
				filter: {
					skip,
					limit: 5,
					include: "PostImage",
					fields: {
						id: true,
						title: true,
						slug: true,
						content: false,
					},
				},
			},
		}).then((res) => res.data);

	fetchBlogBySlug = (slug, token) =>
		HTTPMethod.get(`/Posts/findOne?access_token=${token}`, {
			params: {
				filter: {
					where: { slug },
					include: [{ Comments: "Profile" }, "PostImage"],
				},
			},
		}).then((res) => res.data);

	getPostListLength = () => HTTPMethod.get("/Posts/count").then((res) => res.data);

	postComment = (token, comment) =>
		HTTPMethod.post(`/Comments?access_token=${token}`, comment, {
			params: {
				filter: {
					include: "Profile",
				},
			},
		}).then((res) => res.data);
}

export default new siteService();
