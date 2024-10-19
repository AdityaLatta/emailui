import React from "react";

const FilterBtn = ({ children, active, setactive }) => {
	return (
		<button
			className={`${
				active === children
					? "border  border-border rounded-full  bg-filter_button"
					: "text-black"
			} pl-3 pr-3 box-border lg:text-base text-sm`}
			onClick={() => setactive(children)}>
			{children}
		</button>
	);
};

export default FilterBtn;
