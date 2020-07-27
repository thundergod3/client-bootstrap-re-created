import * as types from "../../../constants/types";

class authAction {
	loginUserRequest(loginForm) {
		return {
			type: types.LOGIN_USER_REUQUEST,
			loginForm,
		};
	}

	registerUserRequest(registerForm) {
		return {
			type: types.REGISTER_USER_REUQUEST,
			registerForm,
		};
	}

	checkAuthenticatedRequest() {
		return {
			type: types.CHECK_AUTHENTICATION_REQUEST,
		};
	}
	checkAuthenticatedSucceeded() {
		return {
			type: types.CHECK_AUTHENTICATION_SUCCEEDED,
		};
	}
	checkAuthenticatedFailed() {
		return {
			type: types.CHECK_AUTHENTICATION_FAILED,
		};
	}

	getUserRequest() {
		return {
			type: types.GET_USER_REQUEST,
		};
	}
	getUserSucceeded(userData) {
		return {
			type: types.GET_USER_SUCCEEDED,
			userData,
		};
	}
}

export default new authAction();
