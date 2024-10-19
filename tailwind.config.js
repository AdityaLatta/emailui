/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				accent: "var(--accent)",
				background: "var(--background)",
				border: "var(--border)",
				text: "var(--text)",
				filter_button: "var(--filter_button)",
				read_background: "var(--read_background)",
			},
		},
	},
	plugins: [],
};
