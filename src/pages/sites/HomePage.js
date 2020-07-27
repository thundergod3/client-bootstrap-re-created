import React from "react";

import MastHead from "../../components/utils/mastHead/MastHead";

const HomePage = () => {
	return (
		<>
			<MastHead
				title="Welcome To Our Studio!"
				subTitle="It's Nice To Meet You"
				btnText="Tell Me More"
				showButton={true}
				links="/service"
				backgroundImage="url('../assets/img/header-bg.jpg')"
			/>
		</>
	);
};

export default HomePage;
