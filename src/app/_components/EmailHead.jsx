import React from "react";

const EmailHead = ({ name, email, subject }) => {
	return (
		<div className="text-xs lg:text-sm font-bold flex flex-col justify-between">
			<p>
				<span className="font-normal">From: </span>
				{` ${name} <${email}>`}
			</p>
			<p>
				<span className="font-normal">Subject: </span>
				{subject}
			</p>
		</div>
	);
};

export default EmailHead;
