import React from "react";

const TeamMember = ({ name, role, image }) => {
	return (
		<div class="col-lg-4">
			<div class="team-member">
				<img class="mx-auto rounded-circle" src={image} alt="" />
				<h4>{name}</h4>
				<p class="text-muted">{role}</p>
				<a class="btn btn-dark btn-social mx-2" href="#!">
					<i class="fab fa-twitter"></i>
				</a>
				<a class="btn btn-dark btn-social mx-2" href="#!">
					<i class="fab fa-facebook-f"></i>
				</a>
				<a class="btn btn-dark btn-social mx-2" href="#!">
					<i class="fab fa-linkedin-in"></i>
				</a>
			</div>
		</div>
	);
};

export default TeamMember;
