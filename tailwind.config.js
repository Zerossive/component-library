/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				light: '#cdd6f4',
				dark: '#11111b',
				primary: '#74c7ec',
				overlay: '#6c7086',
				surface: '#313244',
				base: '#1e1e2e',
				mantle: '#181825',
				crust: '#11111b',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
