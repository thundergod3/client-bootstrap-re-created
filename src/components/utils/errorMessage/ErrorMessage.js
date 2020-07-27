import React from "react";

import { useSelector } from "react-redux";

const ErrorMessage = ({ typeName }) => {
	const {
		errorReducer: { errorList },
	} = useSelector((state) => state);
	let errorShow;

	if (errorList.length !== 0) {
		for (var i = 0; i < errorList.length; i++) {
			if (errorList[i].name === typeName) {
				errorShow = errorList[i].error;
			}
		}
	}

	return <>{errorShow !== undefined && <p className="text-danger text-center">{errorShow.message}</p>}</>;
};

export default ErrorMessage;
