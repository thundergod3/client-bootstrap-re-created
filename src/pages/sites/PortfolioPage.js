import React from "react";

import img1 from "../../assets/img/portfolio/01-thumbnail.jpg";
import img2 from "../../assets/img/portfolio/02-thumbnail.jpg";
import img3 from "../../assets/img/portfolio/03-thumbnail.jpg";
import img4 from "../../assets/img/portfolio/04-thumbnail.jpg";
import img5 from "../../assets/img/portfolio/05-thumbnail.jpg";
import img6 from "../../assets/img/portfolio/06-thumbnail.jpg";

import SinglePortfolio from "../../components/layouts/singlePortfolio/SinglePortfolio";

const PortfolioPage = () => {
	const portfolios = [
		{ title: "Threads", subTitle: "Illustration", backgroundImage: img1 },
		{ title: "Explore", subTitle: "Graphic Design", backgroundImage: img2 },
		{ title: "Finish", subTitle: "Identity", backgroundImage: img3 },
		{ title: "Lines", subTitle: "Branding", backgroundImage: img4 },
		{ title: "Southwest", subTitle: "Website Design", backgroundImage: img5 },
		{ title: "Window", subTitle: "Photography", backgroundImage: img6 },
	];

	return (
		<>
			<section className="page-section bg-light" id="portfolio">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">Portfolio</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
					<div className="row">
						{portfolios.map((portfolio, index) => (
							<SinglePortfolio {...portfolio} key={index} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfolioPage;
