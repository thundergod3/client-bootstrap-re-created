import React from "react";

import MastHead from "../../components/utils/mastHead/MastHead";
import TimeLine from "../../components/layouts/timeLine/TimeLine";

const AboutPage = () => {
	return (
		<>
			<MastHead
				title="About Us"
				subTitle="It's really a greate story"
				showButton={false}
				backgroundImage="url('../assets/img/about.jpg')"
			/>
			<section className="page-section" id="about">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">About</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
					<TimeLine />
				</div>
			</section>
		</>
	);
};

export default AboutPage;
