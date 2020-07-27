import React from "react";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../../store/redux/actions/authAction";

import { Formik } from "formik";
import * as Yup from "yup";

import "./auth.scss";

import ErrorMessage from "../../components/utils/errorMessage/ErrorMessage";

const yupSchema = Yup.object({
	name: Yup.string().required("You need a name to register. "),
	email: Yup.string().email("Email is required").required("You need to register with email address. "),
	password: Yup.string()
		.min(7, "Password need to be at least 7 characters long")
		.required("You need to enter your password"),
	confirmPassword: Yup.string()
		.required("You need to enter your password again")
		.test("pass-match", "Password don't match", function (value) {
			const { password } = this.parent;
			return password === value;
		}),
});

const RegisterPage = () => {
	const {
		authReducer: { authenticated },
		utilReducer: { loadingList },
		errorReducer: { errorList },
	} = useSelector((state) => state);
	const dispatch = useDispatch();
	const { registerUserRequest } = authAction;

	if (authenticated === true) return <Redirect to="/admin" />;

	let loadingRegister;
	for (var i = 0; i < loadingList.length; i++) {
		if (loadingList[i].name === "registerUser") loadingRegister = loadingList[i];
	}

	return (
		<>
			{loadingRegister?.loading === true && errorList.length === 0 && (
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
					initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
					validationSchema={yupSchema}
					onSubmit={(values, actions) => {
						dispatch(registerUserRequest(values));
						actions.resetForm();
					}}>
					{(props) => (
						<div className="register-page">
							<div className="container">
								<div className="login-form">
									<div className="row">
										<h1>Register</h1>
									</div>
									<form>
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<input
														className="form-control"
														id="name"
														type="text"
														placeholder="Your Name *"
														required="required"
														data-validation-required-message="Please enter your name."
														onChange={props.handleChange("name")}
														onBlur={props.handleBlur("name")}
														value={props.values.name}
													/>
													<p className="help-block text-danger">
														{props.errors.name && props.touched.name && (
															<span>{props.errors.name}</span>
														)}
													</p>
												</div>
											</div>
											<div className="col-md-6">
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
											<div className="col-md-6">
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
											<div className="col-md-6">
												<div className="form-group">
													<input
														className="form-control"
														id="confirmPassword"
														type="password"
														placeholder="Enter your password again *"
														required="required"
														data-validation-required-message="Please enter your password again."
														onChange={props.handleChange("confirmPassword")}
														onBlur={props.handleBlur("confirmPassword")}
														value={props.values.confirmPassword}
													/>
													<p className="help-block text-danger">
														{props.errors.confirmPassword &&
															props.touched.confirmPassword && (
																<span>{props.errors.confirmPassword}</span>
															)}
													</p>
												</div>
											</div>
											<div className="col-md-12">
												<ErrorMessage typeName="registerUser" />
												<button
													className="btn btn-primary btn-xl text-uppercase"
													onClick={props.handleSubmit}
													disabled={Object.keys(props.errors).length !== 0}>
													Register
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					)}
				</Formik>
			)}
		</>
	);
};

export default RegisterPage;
