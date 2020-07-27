import React from "react";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core";

import NavbarAdmin from "../../components/admins/navbarAdmin/NavbarAdmin";

const styles = makeStyles((theme) => ({
	adminContainer: {
		display: "grid",
		gridTemplate: "max-content 1fr / max-content 1fr",
	},
	content: {
		height: "100vh",
	},
}));

const AdminWrapper = (props) => {
	const {
		authReducer: { authenticated },
	} = useSelector((state) => state);
	const classes = styles();

	if (authenticated === false) return <Redirect to="/login" />;

	return (
		<>
			{authenticated !== undefined && (
				<div id="admin-page" className={classes.adminContainer}>
					<NavbarAdmin />
					<main className={classes.content}>{props.children}</main>
				</div>
			)}
		</>
	);
};

export default AdminWrapper;
