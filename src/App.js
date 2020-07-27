import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import authAction from "./store/redux/actions/authAction";

import cookieLocal from "./helper/cookieLocal";

import Navbar from "./components/layouts/navbar/Navbar";
import HomePage from "./pages/sites/HomePage";
import AboutPage from "./pages/sites/AboutPage";
import PortfolioPage from "./pages/sites/PortfolioPage";
import TeamPage from "./pages/sites/TeamPage";
import ServicePage from "./pages/sites/ServicePage";
import ContactPage from "./pages/sites/ContactPage";
import LoginPage from "./pages/auth/LoginPage";
import AdminWrapper from "./pages/admins/AdminWrapper";
import AdminHomePage from "./pages/admins/AdminHomePage";
import PostSitePage from "./pages/admins/PostSitePage";
import AllUserPage from "./pages/admins/AllUserPage";
import AddPostPage from "./pages/admins/AddPostPage";
import EditPostPage from "./pages/admins/EditPostPage";
import BlogPage from "./pages/sites/BlogPage";
import BlogDetailPage from "./pages/sites/BlogDetailPage";
import RegisterPage from "./pages/auth/RegisterPage";

const App = ({
	history: {
		location: { pathname },
	},
}) => {
	const {
		authReducer: { authenticated, userData },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { checkAuthenticatedRequest, getUserRequest } = authAction;

	useEffect(() => {
		dispatch(checkAuthenticatedRequest());
	}, [authenticated]);

	useEffect(() => {
		const token = cookieLocal.getFromCookie("token");
		if (token !== undefined) dispatch(getUserRequest());
	}, []);

	return (
		<>
			{pathname.slice(1, 6) !== "admin" &&
				pathname.slice(1, 6) !== "login" &&
				pathname.slice(1, 9) !== "register" && <Navbar />}
			<Switch>
				{/* CLIENT ROUTES */}
				<Route exact path="/" component={HomePage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/portfolio" component={PortfolioPage} />
				<Route exact path="/team" component={TeamPage} />
				<Route exact path="/service" component={ServicePage} />
				<Route exact path="/contact" component={ContactPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/register" component={RegisterPage} />
				<Route exact path="/blog" component={BlogPage} />
				<Route exact path="/blog/:slug" component={BlogDetailPage} />

				{/* ADMIN ROUTES */}
				<Route
					exact
					path="/admin"
					render={(props) => (
						<AdminWrapper>
							<AdminHomePage />
						</AdminWrapper>
					)}
				/>
				<Route
					exact
					path="/admin/posts"
					render={(props) => (
						<AdminWrapper>
							<PostSitePage />
						</AdminWrapper>
					)}
				/>
				<Route
					exact
					path="/admin/posts/add"
					render={(props) => (
						<AdminWrapper>
							<AddPostPage />
						</AdminWrapper>
					)}
				/>
				<Route
					exact
					path="/admin/posts/edit/:id"
					render={(props) => (
						<AdminWrapper>
							<EditPostPage {...props} />
						</AdminWrapper>
					)}
				/>
				<Route
					exact
					path="/admin/users"
					render={(props) => (
						<AdminWrapper>
							<AllUserPage />
						</AdminWrapper>
					)}
				/>
			</Switch>
		</>
	);
};

export default withRouter(App);
