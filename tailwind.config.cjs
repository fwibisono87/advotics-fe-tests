module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#f7f7f7',
				highlight: '#37B04C',
				select: '#D2D2D2',
				heading: '#707070C4',
				emphasis: '#4D4F5C',
				'light-emphasis': '#43425D',
				'lighter-emphasis': '#575757',
				'even-lighter-emphasis': '#8B8B8B',
			},
			fontFamily: {
				'open-sans': ['Open Sans', 'sans-serif'],
				'source-sans': ['Source Sans Pro', 'sans-serif']
			}
		}
	},
	plugins: []
};
