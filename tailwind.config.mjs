/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'false',
	theme: {
		extend: {
			colors:{
				'albastru': 'var(--albastru)',
				'rosu': 'var(--rosu)',
				'negru': 'var(--negru)'
			}
		},
		
	},
	plugins: [require("daisyui")],
}
