/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
