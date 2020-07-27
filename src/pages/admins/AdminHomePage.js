import React from "react";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const AdminHomePage = () => {
	const {
		authReducer: { authenticated },
	} = useSelector((state) => state);

	if (authenticated === false) return <Redirect to="/login" />;

	return (
		<>
			{authenticated !== undefined && (
				<>
					<div id="admin-page">this is page admin</div>
				</>
			)}
		</>
	);
};

export default AdminHomePage;
