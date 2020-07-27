import * as types from "../../../constants/types";

const initalState = {
	userData: {},
	authenticated: undefined,
};

const authReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.CHECK_AUTHENTICATION_SUCCEEDED: {
			return {
				...state,
				authenticated: true,
			};
		}
		case types.CHECK_AUTHENTICATION_FAILED: {
			return {
				...state,
				authenticated: false,
				userData: {},
				token: "",
			};
		}

		case types.GET_USER_SUCCEEDED: {
			return {
				userData: action.userData,
			};
		}

		default: {
			return state;
		}
	}
};

export default authReducer;
