import React from "react";

const Profile = ({ name = "foo" }) => {
	return (
		<div className="w-9 h-9 lg:w-11 lg:h-11 bg-accent rounded-full flex items-center justify-center">
			<span className="text-white uppercase">{name[0]}</span>
		</div>
	);
};

export default Profile;
