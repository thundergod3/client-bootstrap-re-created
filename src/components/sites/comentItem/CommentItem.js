import React from "react";

const CommentItem = ({ comment }) => {
	return (
		<div className="col-md-12">
			<h4>{comment.Profile ? comment.Profile.name : ""}</h4>
			<p>{comment.content}</p>
		</div>
	);
};

export default CommentItem;
