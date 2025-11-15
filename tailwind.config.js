/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
			colors: {
				// Custom Cyan & Blue Theme
				primary: {
					cyan: '#06b6d4',
					blue: '#3b82f6',
				},
				secondary: {
					sky: '#0ea5e9',
				},
				accent: {
					cyan: '#22d3ee',
					dark: '#0891b2',
				},
				dark: {
					bg: '#0f172a',
					card: '#1e293b',
				},
				light: {
					bg: '#ffffff',
					card: '#f8fafc',
				}
			},
		},
	},
	plugins: [],
}
