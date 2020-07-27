import * as types from "../../../constants/types";

class utilAction {
	loadingData(loading) {
		return {
			type: types.LOADING_DATA,
			loading,
		};
	}
	loadedData(loadedName) {
		return {
			type: types.LOADED_DATA,
			loadedName,
		};
	}
}

export default new utilAction();
