"use client";

import Profile from "./Profile";
import { dateFormat } from "./ListItem";

const Body = ({
	id,
	name,
	subject,
	date,
	description,
	favorite,
	setFavorite,
}) => {
	return (
		<main className="border-2 flex gap-4 p-3 lg:p-6 w-full border-border rounded-lg bg-white h-[calc(100vh-5rem)] overflow-auto no-scrollbar">
			<div>
				<Profile name={name} />
			</div>
			<div className="w-full">
				<div className="flex w-full items-start justify-between">
					<div>
						<h1 className="lg:text-2xl font-bold">{subject}</h1>
						<p className="mt-4 text-xs lg:text-base">
							{dateFormat(date)}
						</p>
					</div>
					<button
						className="bg-accent text-white lg-text-base pl-2 pt-1 pb-1 pr-2 lg:p-4 lg:pt-2 lg:pb-2  rounded-full text-xs"
						onClick={() => {
							if (favorite.includes(id)) return;
							setFavorite([...favorite, id]);
						}}>
						Mark as favorite
					</button>
				</div>
				<div className="mt-4 text-sm">{description}</div>
			</div>
		</main>
	);
};

export default Body;
