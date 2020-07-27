import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

const ContactPage = () => {
	const yupSchema = Yup.object({
		name: Yup.string().min(3, "Come on bro, your name is longer than that").required("You must give us your name"),
		email: Yup.string().email("You needto give us a valid email").required("We need your email"),
		phone: Yup.string()
			.min(10, "Please provide your 10 digit phone number")
			.max(15, "Your phone nunber is too long")
			.required("We need a phone number to reach you at"),
		message: Yup.string()
			.min(500, "You need to provide us more detailed information")
			.required("Message is required"),
	});

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				phone: "",
				message: "",
			}}
			validationSchema={yupSchema}
			onSubmit={(values, { resetForm }) => {
				console.log(values);
				resetForm();
			}}>
			{(props) => (
				<>
					<section className="page-section" id="contact">
						<div className="container">
							<div className="text-center">
								<h2 className="section-heading text-uppercase">Contact Us</h2>
								<h3 className="section-subheading text-muted">
									Lorem ipsum dolor sit amet consectetur.
								</h3>
							</div>
							<form id="contactForm" name="sentMessage" noValidate="novalidate">
								<div className="row align-items-stretch mb-5">
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
										<div className="form-group">
											<input
												className="form-control"
												id="email"
												type="email"
												placeholder="Your Email *"
												required="required"
												data-validation-required-message="Please enter your email address."
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
										<div className="form-group mb-md-0">
											<input
												className="form-control"
												id="phone"
												type="tel"
												placeholder="Your Phone *"
												required="required"
												data-validation-required-message="Please enter your phone number."
												onChange={props.handleChange("phone")}
												onBlur={props.handleBlur("phone")}
												value={props.values.phone}
											/>
											<p className="help-block text-danger">
												{props.errors.phone && props.touched.phone && (
													<span>{props.errors.phone}</span>
												)}
											</p>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group form-group-textarea mb-md-0">
											<textarea
												className="form-control"
												id="message"
												placeholder="Your Message *"
												required="required"
												data-validation-required-message="Please enter a message."
												onChange={props.handleChange("message")}
												onBlur={props.handleBlur("message")}
												value={props.values.message}
											/>
											<p className="help-block text-danger">
												{props.errors.message && props.touched.message && (
													<span>{props.errors.message}</span>
												)}
											</p>
										</div>
									</div>
								</div>
								<div className="clearfix">
									<div className="col-lg-12 text-center">
										<div id="success" />
										<button
											className="btn btn-primary btn-xl text-uppercase"
											type="submit"
											onClick={props.handleSubmit}
											disabled={Object.keys(props.errors).length !== 0}>
											Send Message
										</button>
									</div>
								</div>
							</form>
						</div>
					</section>
				</>
			)}
		</Formik>
	);
};

export default ContactPage;
