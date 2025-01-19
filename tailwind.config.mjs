/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				onest: ['Onest Variable', 'comic-sans'],
			},
		},
		screens: {
			sm: {
				max: '640px',
			},
			md: {
				max: '768px',
			},
			lg: {
				max: '1024px',
			},
			xl: {
				max: '1280px',
			},
			'2xl': {
				max: '1536px',
			},
		},
	},
	plugins: [],
}
