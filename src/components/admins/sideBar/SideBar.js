import React from "react";
import { Link as RouterLink } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Link from "@material-ui/core/Link";

import FaceIcon from "@material-ui/icons/Face";
import DashBoardIcon from "@material-ui/icons/Dashboard";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const SideBar = () => {
	const iconList = [
		{ title: "Dashboard", icon: <DashBoardIcon />, path: "/admin" },
		{ title: "Posts", icon: <FileCopyIcon />, path: "/admin/posts" },
		{ title: "Users", icon: <FaceIcon />, path: "/admin/users" },
	];

	return (
		<>
			<List>
				{iconList.map((iconItem, index) => (
					<ListItem button key={index} component={RouterLink} to={iconItem.path}>
						<ListItemIcon>{iconItem.icon}</ListItemIcon>
						<ListItemText primary={iconItem.title}></ListItemText>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default SideBar;
