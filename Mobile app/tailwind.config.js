/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: ["./app/**/*.{tsx,jsx,ts,js}", "./components/**/*.{tsx,jsx,ts,js}"],
	theme: {
		extend: {
			colors: {
				primaryBlue: "#0062f5",
				rippleBlue: "#002861ff",
				BGblue: "#1e00c7",
			},
		},
	},
	plugins: [],
	presets: [require("nativewind/preset")],
};
