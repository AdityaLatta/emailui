"use client";

import React, { useState } from "react";
import FilterBtn from "./FilterBtn";

const Filters = ({ active, setactive }) => {
	return (
		<section className="flex mb-2">
			<p className="text-black text-sm lg:text-base pr-3 text-nowrap">
				Filter By:{" "}
			</p>
			<FilterBtn active={active} setactive={setactive}>
				Unread
			</FilterBtn>
			<FilterBtn active={active} setactive={setactive}>
				Read
			</FilterBtn>
			<FilterBtn active={active} setactive={setactive}>
				Favorites
			</FilterBtn>
		</section>
	);
};

export default Filters;
