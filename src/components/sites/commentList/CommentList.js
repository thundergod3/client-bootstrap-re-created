import React from "react";

import { useSelector, useDispatch } from "react-redux";
import siteAction from "../../../store/redux/actions/siteAction";

import { Formik } from "formik";
import * as Yup from "yup";

import CommentItem from "../comentItem/CommentItem";

const yupSchema = Yup.object({
	content: Yup.string().required("Your comment needs to have text. "),
});

const CommentList = () => {
	const {
		siteReducer: { blogDetail },
		authReducer: { authenticated, userData },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { postCommentRequest } = siteAction;

	return (
		<Formik
			initialValues={{
				content: "",
			}}
			onSubmit={(values, actions) => {
				const comment = {
					...values,
					postId: blogDetail.id,
					profileId: userData.id,
					userId: userData.id,
				};
				dispatch(postCommentRequest(comment));
				actions.resetForm();
			}}
			validationSchema={yupSchema}>
			{(props) => (
				<>
					<div className="form-group">
						<input
							className="form-control"
							id="content"
							type="text"
							placeholder="Your Content *"
							required="required"
							data-validation-required-message="Write your comment."
							onChange={props.handleChange("content")}
							onBlur={props.handleBlur("content")}
							value={props.values.content}
						/>
						<p className="help-block text-danger">
							{props.errors.email && props.touched.email && <span>{props.errors.email}</span>}
						</p>
						<button
							type="submit"
							className="btn btn-primary"
							onClick={props.handleSubmit}
							disabled={Object.keys(props.errors).length !== 0}>
							Submit
						</button>
					</div>
					<div className="row">
						{blogDetail.Comments &&
							blogDetail.Comments.length > 0 &&
							blogDetail.Comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
					</div>
				</>
			)}
		</Formik>
	);
};

export default CommentList;
