import React from "react";
import { Link } from "react-router-dom";

import cookieLocal from "../../../helper/cookieLocal";

const SingleBlog = ({ blog: { title, PostImage, slug } }) => {
	const token = cookieLocal.getFromCookie("token");

	return (
		<div className="col-lg-4 col-sm-6 mb-4">
			<div className="portfolio-item">
				<Link className="portfolio-link" to={`/blog/${slug}`}>
					<div className="portfolio-hover">
						<div className="portfolio-hover-content">
							<i className="fas fa-plus fa-3x"></i>
						</div>
					</div>
					{PostImage && PostImage.length > 0 && (
						<img
							className="img-fluid"
							src={`http://localhost:8080${PostImage[0].thumbnail}?access_token=${token}`}
							style={{ width: "100%" }}
						/>
					)}
				</Link>
				<div className="portfolio-caption">
					<Link to={`/blog/${slug}`}>
						<div className="portfolio-caption-heading">{title}</div>
					</Link>
					<Link to={`/blog/${slug}`}>
						<div className="portfolio-caption-subheading text-muted">{slug}</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SingleBlog;
