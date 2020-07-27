import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import adminAction from "../../store/redux/actions/adminAction";

import TableView from "../../components/admins/tableView/TableView";

const columns = [
	{ label: "ID", name: "id" },
	{ label: "Email", name: "email" },
	{ label: "Name", name: "name" },
];

const AllUserPage = () => {
	const {
		adminReducer: { usersList },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { fetchAllUSerRequest } = adminAction;

	useEffect(() => {
		console.log("a");
		dispatch(fetchAllUSerRequest());
	}, []);

	return (
		<>
			<h1>User</h1>
			<TableView rows={usersList} columns={columns} />
		</>
	);
};

export default AllUserPage;
