import React from "react";

const SingleService = ({ title, content, icon }) => {
	return (
		<div className="col-md-4">
			<span className="fa-stack fa-4x">
				<i className="fas fa-circle fa-stack-2x text-primary" />
				<i className={`fas ${icon} fa-stack-1x fa-inverse`} />
			</span>
			<h4 className="my-3">{title}</h4>
			<p className="text-muted">{content}</p>
		</div>
	);
};

export default SingleService;
