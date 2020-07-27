import React from "react";

import team1 from "../../assets/img/team/1.jpg";
import team2 from "../../assets/img/team/2.jpg";
import team3 from "../../assets/img/team/3.jpg";

import TeamMember from "../../components/layouts/teamMember/TeamMember";

const TeamPage = () => {
	const members = [
		{ name: "Kay Garland", role: "Lead Designer", image: team1 },
		{ name: "Larry Parker", role: "Lead Marketer", image: team2 },
		{ name: "Diana Pertersen", role: "Lead Developer", image: team3 },
	];

	return (
		<section className="page-section bg-light" id="team">
			<div className="container">
				<div className="text-center">
					<h2 className="section-heading text-uppercase">Our Amazing Team</h2>
					<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
				</div>
				<div className="row">
					{members.map((member, index) => (
						<TeamMember {...member} key={index} />
					))}
				</div>
				<div className="row">
					<div className="col-lg-8 mx-auto text-center">
						<p className="large text-muted">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis,
							quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamPage;
