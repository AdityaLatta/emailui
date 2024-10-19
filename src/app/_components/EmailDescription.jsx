import React from "react";

const EmailDescription = ({ description, date, isFavorite }) => {
	return (
		<div className="text-xs lg:text-sm pt-2 space-y-2 w-full">
			<p className="w-full truncate">{description}</p>

			<div className="sm:flex">
				<p>{date}</p>

				{isFavorite && (
					<p className="text-accent font-bold sm:ml-6">Favorite</p>
				)}
			</div>
		</div>
	);
};

export default EmailDescription;
