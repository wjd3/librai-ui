import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'selector',

	theme: {
		extend: {
			fontFamily: {
				display: ['Bitter', 'serif'],
				body: ['Quicksand', 'sans-serif']
			},
			colors: {
				pampas: {
					'50': '#f9f6f3',
					'100': '#f4efea',
					'200': '#e1d3c7',
					'300': '#ceb6a3',
					'400': '#b9957e',
					'500': '#ab7c64',
					'600': '#9e6b58',
					'700': '#83574b',
					'800': '#6b4841',
					'900': '#583d36',
					'950': '#2e1f1c'
				},
				akaroa: {
					'50': '#f9f7f3',
					'100': '#f1ede3',
					'200': '#e3dac5',
					'300': '#d1c1a1',
					'400': '#bda27a',
					'500': '#b08d5f',
					'600': '#a27b54',
					'700': '#876447',
					'800': '#6e513e',
					'900': '#5a4434',
					'950': '#30221a'
				},
				sage: {
					'50': '#f5f8f6',
					'100': '#e0e7e3',
					'200': '#c0cfc6',
					'300': '#8ba596',
					'400': '#738e80',
					'500': '#597366',
					'600': '#455c50',
					'700': '#3a4b43',
					'800': '#313e38',
					'900': '#2c3531',
					'950': '#161d1a'
				},
				'antique-brass': {
					'50': '#faf5f0',
					'100': '#f0e2d5',
					'200': '#dfc4a8',
					'300': '#cea37b',
					'400': '#c48b60',
					'500': '#b86d48',
					'600': '#a2563d',
					'700': '#874136',
					'800': '#6f3631',
					'900': '#5c2f2b',
					'950': '#341614'
				},
				'tom-thumb': {
					'50': '#f3f6f3',
					'100': '#e3e9e2',
					'200': '#c7d4c6',
					'300': '#a0b5a0',
					'400': '#759275',
					'500': '#557457',
					'600': '#435e45',
					'700': '#344836',
					'800': '#2b3a2d',
					'900': '#243026',
					'950': '#131b14'
				},
				tapa: {
					'50': '#f4f2f2',
					'100': '#e2e1df',
					'200': '#c7c4c1',
					'300': '#a7a29d',
					'400': '#8e8881',
					'500': '#7a746e',
					'600': '#6c6662',
					'700': '#585350',
					'800': '#4d4846',
					'900': '#44403f',
					'950': '#262322'
				},
				'lunar-green': {
					'50': '#f3f6f4',
					'100': '#e2e9e2',
					'200': '#c6d4c7',
					'300': '#9fb6a2',
					'400': '#749379',
					'500': '#54755a',
					'600': '#405b46',
					'700': '#334938',
					'800': '#2a3b2e',
					'900': '#233126',
					'950': '#131b15'
				},
				'fuscous-gray': {
					'50': '#f4f4f2',
					'100': '#e4e3dd',
					'200': '#cbc8bd',
					'300': '#aca898',
					'400': '#958d7a',
					'500': '#867e6c',
					'600': '#726a5c',
					'700': '#5a5249',
					'800': '#504943',
					'900': '#47403c',
					'950': '#272421'
				},
				'cape-palliser': {
					'50': '#f9f5f1',
					'100': '#eee3d7',
					'200': '#dbc5ac',
					'300': '#c8a581',
					'400': '#bb8d64',
					'500': '#a56d4c',
					'600': '#9a5d45',
					'700': '#81483c',
					'800': '#6a3d36',
					'900': '#59332e',
					'950': '#311917'
				},
				'rodeo-dust': {
					'50': '#f8f6f4',
					'100': '#f0ebe4',
					'200': '#dfd6c9',
					'300': '#c5b29c',
					'400': '#b59a82',
					'500': '#a68469',
					'600': '#99745d',
					'700': '#7f5e4f',
					'800': '#684e44',
					'900': '#554139',
					'950': '#2d201d'
				}
			}
		}
	},

	plugins: [forms]
} as Config;
