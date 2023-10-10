/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'Open Sans'],
				nino: ['nino', 'Open Sans'],
				montserrat: ['Montserrat', 'Open Sans'],
				contractica: ['Contractica', 'Open Sans']
			},
			colors: {
				nBlue: '#4096FC'
			}
		}
	},
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })]
};
