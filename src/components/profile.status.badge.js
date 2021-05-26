import React from "react";
import "./profile.status.badge.css";

class ProfileStatusBadge extends React.Component {
	render() {
		return (
			<React.Fragment>
				<a className="badge_link" href={this.props.linkUrl}>
					<img src={this.props.imageUrl} style={{ height: "13px" }} alt="Badge Icon"></img>
					<span className="link_name">{this.props.linkName}</span>
				</a>
			</React.Fragment>
		);
	}
}

export default ProfileStatusBadge;
