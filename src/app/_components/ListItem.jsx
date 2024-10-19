import { useRef } from "react";
import EmailDescription from "./EmailDescription";
import EmailHead from "./EmailHead";
import Profile from "./Profile";

export const dateFormat = (date) => {
	const d = new Date(date);
	const dateString = d.toLocaleDateString("en-GB");
	const timeString = d
		.toLocaleTimeString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		})
		.toLowerCase();

	return `${dateString} ${timeString}`;
};

const ListItem = ({
	id,
	name,
	email,
	subject,
	description,
	body,
	bodyIsLoading,
	date,
	isRead,
	isFavorite,
	currentEmail,
	setcurrentEmail,
}) => {
	const item = useRef(null);

	return (
		<div
			ref={item}
			className={`border-2 ${
				currentEmail?.id === id ? "border-accent" : "border-border"
			}  p-2 w-full flex ${
				isRead ? "bg-read_background" : "bg-white"
			} rounded-lg`}
			onClick={() => {
				setcurrentEmail({ id, name, subject, date });
			}}>
			<div className="lg:pl-4 lg:pr-5 pr-4 ">
				<Profile name={name} />
			</div>

			<div className="w-full truncate">
				<EmailHead name={name} email={email} subject={subject} />
				<EmailDescription
					description={description}
					date={dateFormat(date)}
					isFavorite={isFavorite}
				/>

				{currentEmail?.id === id && (
					<p className="text-xs md:hidden text-wrap mt-4">
						{body?.body}
						{bodyIsLoading && <span>Loading...</span>}
					</p>
				)}
			</div>
		</div>
	);
};

export default ListItem;
