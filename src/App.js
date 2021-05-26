import React from 'react';
import TableWithLegend from './components/table.with.legend';
import ProfileStatusBadge from './components/profile.status.badge';

import user from "./assets/icons/user.svg";
import star from "./assets/icons/star.svg";
import sickness from "./assets/icons/sickness.svg";
import plane from "./assets/icons/plane.svg";
import comment from "./assets/icons/comment.svg";

class App extends React.Component {
	render() {
		const tableWithLegends = [
			{ name: "Email", info: "yura.gusak7@gmail.com" },
			{ name: "Work mobile", info: "+380678465227" },
			{ name: "Skype", info: "paradise8538" },
			{ name: "Status", info: "Current" },
			{ name: "Last Login", info: "25/05/2021 19:04" }
		];

		const profileStatusBadges = [
			{ imageUrl: user, linkUrl: "https://www.youtube.com/", linkName: "Profile" },
			{ imageUrl: star, linkUrl: "https://yantarne.fm/", linkName: "Star" },
			{ imageUrl: sickness, linkUrl: "https://www.linkedin.com/in/yura-husak/", linkName: "Sickness" },
			{ imageUrl: plane, linkUrl: "https://cssgrid-generator.netlify.app/", linkName: "Plane" },
			{ imageUrl: comment, linkUrl: "https://www.geoguessr.com/", linkName: "Comment" }
		];

		return (
			<React.Fragment>
				<TableWithLegend legend="Legend" tableItems={tableWithLegends} />
				<div style={{ display: "flex" }}>
					{profileStatusBadges.map((el, i) => <ProfileStatusBadge key={i} linkUrl={el.linkUrl} imageUrl={el.imageUrl} linkName={el.linkName} />)}
				</div>
			</React.Fragment>
		);
	}
}

export default App;
