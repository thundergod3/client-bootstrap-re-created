import React from "react";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../../store/redux/actions/authAction";

import { Formik } from "formik";
import * as Yup from "yup";

import "./auth.scss";

import ErrorMessage from "../../components/utils/errorMessage/ErrorMessage";

const yupSchema = Yup.object({
	email: Yup.string().email("Email is required").required("You need to login with email address. "),
	password: Yup.string().required("You need to enter your password"),
});

const LoginPage = () => {
	const {
		authReducer: { authenticated },
		utilReducer: { loadingList },
		errorReducer: { errorList },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { loginUserRequest } = authAction;

	if (authenticated === true) return <Redirect to="/admin" />;

	let loadingSignIn;
	for (var i = 0; i < loadingList.length; i++) {
		if (loadingList[i].name === "loginUser") loadingSignIn = loadingList[i];
	}

	return (
		<>
			{loadingSignIn?.loading === true && errorList.length === 0 && (
				<div
					style={{
						background: "url(../../assets/img/ElasticHalfAbyssiniancat-size_restricted.gif)",
						height: "100vh",
						width: "100vw",
						"background-repeat": "no-repeat",
						"background-size": " contain",
					}}></div>
			)}
			{authenticated !== undefined && (
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={yupSchema}
					onSubmit={(values, actions) => {
						dispatch(loginUserRequest(values));
						actions.resetForm();
					}}>
					{(props) => (
						<div className="login-page">
							<div className="container">
								<div className="login-form">
									<div className="row">
										<h1>Login</h1>
									</div>
									<div className="row">
										<form>
											<div className="col-md-12">
												<div className="form-group">
													<input
														className="form-control"
														id="email"
														type="text"
														placeholder="Your Email *"
														required="required"
														data-validation-required-message="Please enter your email."
														onChange={props.handleChange("email")}
														onBlur={props.handleBlur("email")}
														value={props.values.email}
													/>
													<p className="help-block text-danger">
														{props.errors.email && props.touched.email && (
															<span>{props.errors.email}</span>
														)}
													</p>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input
														className="form-control"
														id="password"
														type="password"
														placeholder="Your Password *"
														required="required"
														data-validation-required-message="Please enter your password."
														onChange={props.handleChange("password")}
														onBlur={props.handleBlur("password")}
														value={props.values.password}
													/>
													<p className="help-block text-danger">
														{props.errors.password && props.touched.password && (
															<span>{props.errors.password}</span>
														)}
													</p>
												</div>
											</div>
											<div className="col-md-12">
												<ErrorMessage typeName="loginUser" />
												<button
													className="btn btn-primary btn-xl text-uppercase"
													onClick={props.handleSubmit}
													disabled={Object.keys(props.errors).length !== 0}>
													Login
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					)}
				</Formik>
			)}
		</>
	);
};

export default LoginPage;
