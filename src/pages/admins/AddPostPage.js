import React from "react";

import { useSelector, useDispatch } from "react-redux";
import adminAction from "../../store/redux/actions/adminAction";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import cookieLocal from "../../helper/cookieLocal";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import AddIcon from "@material-ui/icons/Add";
import ImageIcon from "@material-ui/icons/Image";

/* global $ */

const styles = makeStyles((theme) => ({
	formContainer: {
		margin: theme.spacing.unit * 3,
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	leftSide: {
		flex: 2,
		height: "100%",
		margin: theme.spacing.unit * 1,
		padding: theme.spacing.unit * 3,
	},
	rightSide: {
		flex: 1,
		height: "100%",
		margin: theme.spacing.unit * 1,
		padding: theme.spacing.unit * 3,
	},
	postImage: {
		width: "100%",
	},
}));

const modules = {
	toolbar: [
		["bold", "italic", "underline", "strike"],
		[{ header: 1 }, { header: 2 }],
		[{ list: "ordered" }, { list: "bullet" }],
		[{ indent: "-1" }, { indent: "+1" }],
		[{ size: ["small", "medium", "large", "huge"] }],
		[{ color: [] }, { background: [] }],
		["image"],
		["clean"],
	],
};

const formats = [
	"header",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"script",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
	"color",
	"code-block",
];

const schemaYup = Yup.object({
	title: Yup.string().required("Title is required"),
	slug: Yup.string().required(),
	content: Yup.string().required(),
});

const AddPostPage = () => {
	const {
		adminReducer: { postItem },
		utilReducer: { loadingList },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { addPostRequest } = adminAction;
	const { formContainer, leftSide, rightSide, postImage } = styles();

	let loadingAddBlog;
	for (var i = 0; i < loadingList.length; i++) {
		if (loadingList[i].name === "addPost") loadingAddBlog = loadingList[i].loading;
	}

	return (
		<>
			{loadingAddBlog !== undefined && loadingAddBlog === true ? (
				"Loading"
			) : (
				<Formik
					initialValues={{
						title: "",
						slug: "",
						createdAt: "",
						status: false,
						content: "",
					}}
					validationSchema={schemaYup}
					onSubmit={(values, actions) => {
						dispatch(addPostRequest(values));
						actions.resetForm();
					}}>
					{(props) => (
						<div>
							<Form className={formContainer}>
								<Paper className={leftSide}>
									<FormikTextField
										name="title"
										label="Title"
										margin="normal"
										fullWidth
										onChange={(e) =>
											props.setFieldValue("slug", e.target.value.toLowerCase().replace(/ /g, "_"))
										}
									/>
									<FormikTextField name="slug" label="Slug" margin="normal" />
									<ReactQuill
										value={props.values.content}
										placeholder="Write some cool stuff"
										onChange={props.handleChange("content")}
										modules={modules}
										formats={formats}
									/>
								</Paper>
								<Paper className={rightSide}>
									<FormikSelectField
										name="status"
										label="Status"
										margin="normal"
										fullWidth
										options={[
											{ label: "Unpublished", value: false },
											{ label: "Published", value: true },
										]}
									/>
									<Button onClick={props.handleSubmit} variant="contained" color="secondary">
										<ImageIcon />
										Add
									</Button>
								</Paper>
							</Form>
						</div>
					)}
				</Formik>
			)}
		</>
	);
};

export default AddPostPage;
