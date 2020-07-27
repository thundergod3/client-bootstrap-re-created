import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import adminAction from "../../store/redux/actions/adminAction";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikTextField, FormikSelectField } from "formik-material-fields";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";

import SaveIcon from "@material-ui/icons/Save";
import ImageIcon from "@material-ui/icons/Image";
import cookieLocal from "../../helper/cookieLocal";

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
	btnSave: {
		marginBottom: theme.spacing.unit * 2,
	},
	postImage: {
		width: "100%",
	},
}));

const schemaYup = Yup.object({
	title: Yup.string().required("Title is required"),
	slug: Yup.string().required(),
	content: Yup.string().required(),
});

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

const EditPostPage = ({
	match: {
		params: { id },
	},
}) => {
	const {
		adminReducer: { postItem },
		utilReducer: { loadingList },
	} = useSelector((state) => state);
	const token = cookieLocal.getFromCookie("token");
	const dispatch = useDispatch();
	const { fetchSinglePostRequest, editPostRequest, uploadImageRequest } = adminAction;
	const { formContainer, leftSide, rightSide, btnSave, postImage } = styles();

	const uploadImage = (e) => {
		const data = new FormData();
		data.append("file", e.target.files[0], new Date().getTime().toString() + e.target.files[0].name);
		dispatch(uploadImageRequest(id, data));
	};

	useEffect(() => {
		dispatch(fetchSinglePostRequest(id));
	}, []);

	let loadingEditPost;
	for (let i = 0; i < loadingList.length; i++) {
		if (loadingList[i].name === "fetchPostItem") {
			loadingEditPost = loadingList[i].loading;
		}
	}

	return (
		<>
			{Object.keys(postItem).length !== 0 ? (
				<Formik
					enableReinitialize
					initialValues={{
						title: postItem.title || "",
						slug: postItem.slug || "",
						createdAt: postItem.createdAt || "",
						status: postItem?.status,
						content: postItem.content || "",
					}}
					validationSchema={schemaYup}
					onSubmit={(values, actions) => {
						dispatch(editPostRequest(id, values));
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
										content="Status"
										margin="normal"
										fullWidth
										options={[
											{ label: "Unpublished", value: false },
											{ label: "Published", value: true },
										]}
									/>
									<div className={btnSave}>
										<Button onClick={props.handleSubmit} variant="contained" color="secondary">
											<SaveIcon />
											Save
										</Button>
									</div>
									{postItem.PostImage &&
										postItem.PostImage.length !== 0 &&
										postItem.PostImage.map((image, index) => (
											<img
												key={index}
												src={`http://localhost:8080${image.url}?access_token=${token}`}
												className={postImage}
											/>
										))}
									<div>
										<Button
											variant="contained"
											color="primary"
											onClick={(e) => {
												$(".MyFile").trigger("click");
											}}>
											<ImageIcon /> Upload Post Image
										</Button>
										<input
											type="file"
											style={{ display: "none" }}
											className="MyFile"
											onChange={(e) => uploadImage(e)}
										/>
									</div>
								</Paper>
							</Form>
						</div>
					)}
				</Formik>
			) : (
				<>{loadingEditPost !== undefined ? <>{loadingEditPost === true && "Loading"}</> : "Loading"}</>
			)}
		</>
	);
};

export default EditPostPage;
