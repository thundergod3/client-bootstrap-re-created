import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

import { useSelector } from "react-redux";

import "./Navbar.scss";

const Navbar = ({
	history: {
		location: { pathname },
	},
}) => {
	const [navBarBgColor, setNavbarBgColor] = useState({});
	const {
		authReducer: { authenticated },
	} = useSelector((state) => state);
	const routes = [
		{
			path: "/service",
			title: "Services",
		},
		{
			path: "/portfolio",
			title: "Portfolio",
		},
		{
			path: "/about",
			title: "About",
		},
		{
			path: "/blog",
			title: "Blog",
		},
		{
			path: "/team",
			title: "Team",
		},
		{
			path: "/contact",
			title: "Contact",
		},
	];

	const isActive = (path) => {
		if (pathname === path) return { color: "#fed136" };
		else return;
	};

	// useEffect(() => {
	// 	document.addEventListener("scroll", () => {
	// 		const backgroundcolor = window.scrollY < 100 ? "red" : "blue";
	// 	})
	// }, [])

	return (
		<>
			{authenticated !== undefined && (
				<nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-scroll" id="mainNav">
					<div className="container">
						<Link className="navbar-brand js-scroll-trigger" to="/">
							<img src="../../../assets/img/navbar-logo.svg" alt="" />
						</Link>
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation">
							Menu
							<i className="fas fa-bars ml-1" />
						</button>
						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav text-uppercase ml-auto">
								{routes.map((route, index) => (
									<li className="nav-item" key={index}>
										<Link
											className="nav-link js-scroll-trigger"
											style={isActive(route.path)}
											to={route.path}>
											{route.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</nav>
			)}
		</>
	);
};

export default withRouter(Navbar);
