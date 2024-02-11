/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	important: '#body-root',
	theme: {
		extend: {
			colors: {
				primary: 'rgb (var (--color-primary) / ‹alpha-value›)'
			}
		},
	},
	plugins: [],
};

