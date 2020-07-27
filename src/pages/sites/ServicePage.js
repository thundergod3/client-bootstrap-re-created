import React from "react";
import MastHead from "../../components/utils/mastHead/MastHead";
import SingleService from "../../components/layouts/singleService/SingleService";

const ServicePage = () => {
	const services = [
		{
			title: "E-Commerce",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
			icon: "fa-shopping-cart",
		},
		{
			title: "Responsive Design",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
			icon: "fa-laptop",
		},
		{
			title: "Web Security",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
			icon: "fa-lock",
		},
	];
	return (
		<>
			<MastHead backgroundImage="../../assets/img/services.jpg" />
			<section className="page-section" id="services">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">Services</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
					<div className="row text-center">
						{services.map((service, index) => (
							<SingleService key={index} {...service} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default ServicePage;
