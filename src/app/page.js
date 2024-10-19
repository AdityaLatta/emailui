"use client";

import { useEffect, useState } from "react";
import Body from "./_components/Body";
import Filters from "./_components/Filters";
import ListItem from "./_components/ListItem";

import { useQuery } from "@tanstack/react-query";
import { fetchBody, fetchEmails } from "./utils/apiFunctions";
import { localFavorite, localRead } from "./utils/localitems";
import {
	filterFavorites,
	filterRead,
	filterUnread,
} from "./utils/filterFunctions";

export default function Home() {
	const [page, setpage] = useState(1);
	const [emails, setemails] = useState([]);
	const [currentEmail, setcurrentEmail] = useState(null);
	const [filter, setFilter] = useState("Unread");
	const [read, setRead] = useState(localRead());
	const [favorite, setFavorite] = useState(localFavorite());

	const { data, isLoading, isError, isSuccess, isFetching } = useQuery({
		queryKey: ["emails", page],
		queryFn: () => {
			return fetchEmails(page);
		},
	});

	const {
		data: body,
		isLoading: bodyIsLoading,
		isSuccess: bodyIsSuccess,
		isError: bodyIsError,
	} = useQuery({
		queryKey: ["body", currentEmail],
		queryFn: () => {
			return fetchBody(currentEmail.id);
		},
		enabled: !!currentEmail,
	});

	useEffect(() => {
		if (filter === "Favorites") {
			setemails(filterFavorites(data, favorite));
		} else if (filter === "Read") {
			setemails(filterRead(data, read));
		} else {
			data && setemails(filterUnread(data, read, favorite));
		}
	}, [filter, data]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (bodyIsSuccess) {
			setRead([...read, currentEmail.id]);

			if (read.includes(currentEmail.id)) return;

			localStorage.setItem(
				"read",
				JSON.stringify([...read, currentEmail.id])
			);
		}
	}, [bodyIsSuccess]); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		localStorage.setItem("favorite", JSON.stringify(favorite));
	}, [favorite]);

	return (
		<>
			<Filters active={filter} setactive={setFilter} />

			<section className={`grid grid-cols-12 gap-6`}>
				<div
					className={`${
						currentEmail
							? "md:col-span-4 col-span-12"
							: "col-span-12"
					} flex flex-col gap-4 mt-4 md:h-[calc(100vh-5rem)] md:overflow-auto no-scrollbar`}>
					{isSuccess &&
						emails?.map((data) => (
							<ListItem
								key={data.id}
								id={data.id}
								name={data.from.name}
								email={data.from.email}
								subject={data.subject}
								description={data.short_description}
								body={body}
								bodyIsLoading={bodyIsLoading}
								date={data.date}
								isRead={read.includes(data.id)}
								isFavorite={favorite.includes(data.id)}
								currentEmail={currentEmail}
								setcurrentEmail={setcurrentEmail}
							/>
						))}

					{isLoading && (
						<div className="flex justify-center items-center h-screen">
							<div className="w-16 h-16 border-4 border-t-transparent border-accent rounded-full animate-spin"></div>
						</div>
					)}

					{isError && (
						<div className="flex justify-center items-center h-screen">
							Something went wrong , try again
						</div>
					)}
				</div>

				<main
					className={`mt-4 ${
						currentEmail ? "col-span-8 hidden md:block" : "hidden"
					} `}>
					{bodyIsSuccess && (
						<Body
							id={body.id}
							name={currentEmail.name}
							date={currentEmail.date}
							subject={currentEmail.subject}
							description={body.body}
							favorite={favorite}
							setFavorite={setFavorite}
						/>
					)}
					{bodyIsLoading && (
						<main className="border-2 flex justify-center items-start w-full h-[calc(100vh-5rem)] border-border rounded-lg bg-white">
							<div className="flex justify-center items-center h-lvh">
								<div className="w-16 h-16 border-4 border-t-transparent border-accent rounded-full animate-spin"></div>
							</div>
						</main>
					)}
					{bodyIsError && (
						<div className="flex justify-center items-center h-screen">
							Something went wrong , try again
						</div>
					)}
				</main>
			</section>

			<section className="flex justify-center items-center mt-8">
				<div className="flex gap-4">
					<button
						className="font-bold disabled:opacity-50 disabled:font-normal"
						onClick={() => {
							setpage((old) => Math.max(old - 1, 1));
							setcurrentEmail(null);
						}}
						disabled={page === 1 || isFetching}>
						Previous
					</button>

					<span>Page {page}</span>

					<button
						className="font-bold disabled:opacity-50 disabled:font-normal"
						onClick={() => {
							setpage((old) =>
								Math.ceil(data?.total / 10) === page
									? old
									: old + 1
							);
							setcurrentEmail(null);
						}}
						disabled={
							Math.ceil(data?.total / 10) === page || isFetching
						}>
						Next
					</button>
				</div>
			</section>
		</>
	);
}
