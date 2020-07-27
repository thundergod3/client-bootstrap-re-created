import React from "react";

import { Link } from "react-router-dom";

const MastHead = ({ showButton, title, subTitle, btnText, backgroundImage, links }) => {
	return (
		<header className="masthead" style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="container">
				<div className="masthead-subheading">{title}</div>
				<div className="masthead-heading text-uppercase">{subTitle}</div>
				{showButton && (
					<Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={links}>
						{btnText}
					</Link>
				)}
			</div>
		</header>
	);
};

export default MastHead;
