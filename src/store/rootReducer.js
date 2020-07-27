import { combineReducers } from "redux";
import adminReducer from "./redux/reducers/adminReducer";
import authReducer from "./redux/reducers/authReducer";
import utilReducer from "./redux/reducers/utilReducer";
import errorReducer from "./redux/reducers/errorReducer";
import siteReducer from "./redux/reducers/siteReducer";

const rootReducer = combineReducers({
	adminReducer,
	authReducer,
	utilReducer,
	errorReducer,
	siteReducer,
});

export default rootReducer;
