import HTTPMethod from "./index";

class authService {
	login = (loginInfo) => HTTPMethod.post("/users/login", loginInfo).then((res) => res.data);

	register = (registerInfo) => HTTPMethod.post("/users", registerInfo).then((res) => res.data);

	getUser = (userId, token) =>
		HTTPMethod.get(`/users/${userId}?access_token=${token}`, {
			filter: {
				include: "Profile",
			},
		}).then((res) => res.data);
}

export default new authService();
