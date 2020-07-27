import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import adminAction from "../../store/redux/actions/adminAction";

import TableView from "../../components/admins/tableView/TableView";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";

import EditIcon from "@material-ui/icons/Edit";

const columns = [
	{ label: "ID", name: "id" },
	{ label: "Title", name: "title" },
];

const styles = makeStyles((theme) => ({
	fab: {
		position: "fixed",
		bottom: 50,
		right: 50,
	},
}));

const PostSitePage = () => {
	const {
		adminReducer: { postsList },
		utilReducer: { loadingList },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { fetchPostRequest, clearSinglePost } = adminAction;
	const { fab } = styles();

	useEffect(() => {
		if (postsList.length === 0) dispatch(fetchPostRequest());
		dispatch(clearSinglePost());
	}, []);

	let loadingPost;
	for (var i = 0; i < loadingList.length; i++) {
		if (loadingList[i].name === "fetchPost") loadingPost = loadingList[i].loading;
	}

	return (
		<>
			{postsList.length !== 0 ? (
				<>
					Post
					<TableView rows={postsList} columns={columns} />
					<Fab
						component={RouterLink}
						to="/admin/posts/add"
						color="secondary"
						arial-label="Add"
						className={fab}>
						<EditIcon />
					</Fab>
				</>
			) : (
				<>
					{loadingPost !== undefined ? (
						<>{loadingPost ? "Loading" : <>{postsList.length === 0 && "You don't have any posts"}</>}</>
					) : (
						"Loading"
					)}
				</>
			)}
		</>
	);
};

export default PostSitePage;
