import { fork, all } from "redux-saga/effects";
import authSaga from "./saga/authSaga";
import adminSaga from "./saga/adminSaga";
import siteSaga from "./saga/siteSaga";

export default function* () {
	yield all([fork(authSaga), fork(adminSaga), fork(siteSaga)]);
}
