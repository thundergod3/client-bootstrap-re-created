import * as types from "../../../constants/types";

const initialState = {
	loadingList: [],
};

const utilReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOADING_DATA: {
			return {
				...state,
				loadingList:
					state.loadingList.length === 0
						? [...state.loadingList, action.loading]
						: state.loadingList.map((loading) =>
								loading.name !== action.loading.name ? action.loading : loading
						  ),
			};
		}
		case types.LOADED_DATA: {
			return {
				...state,
				loadingList: state.loadingList.map((loading) =>
					loading.name === action.loadedName ? { ...loading, loading: false } : loading
				),
			};
		}

		default: {
			return state;
		}
	}
};

export default utilReducer;
