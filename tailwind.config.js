/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				text: '#cdd6f4',
				background: '#11111b',
				primary: '#313244',
				secondary: '#1e1e2e',
				accent: '#74c7ec',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
