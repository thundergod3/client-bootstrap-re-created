import React, { useState } from "react";

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import SideBar from "../sideBar/SideBar";

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
	toolBar: {
		paddingRight: 24,
	},
	appBar: {
		gridColumn: "span 2",
		position: "relative",
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		transitions: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "noWrap",
		width: drawerWidth,
		marginTop: -60,
	},
	drawerPaperClose: {
		overflowX: "hidden",
		width: theme.spacing.unit * 7,
		transitions: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	toolBarIcon: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
}));

const NavbarAdmin = () => {
	const [open, setOpen] = useState(false);
	const classes = styles();

	const handleDrawer = () => setOpen(!open);

	return (
		<>
			<AppBar position="static" className={classNames(classes.appBar, open && classes.appBarShift)}>
				<ToolBar className={classes.toolBar}>
					<IconButton onClick={handleDrawer}>
						<MenuIcon> </MenuIcon>
					</IconButton>
					<Typography component="h1" variant="h6" color="inherit" noWrap>
						Admin
					</Typography>
				</ToolBar>
			</AppBar>
			<Drawer
				variant="permanent"
				open={true}
				classes={{ paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose) }}>
				<div className={classes.toolBarIcon}>
					<IconButton onClick={handleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<SideBar />
			</Drawer>
		</>
	);
};

export default NavbarAdmin;
