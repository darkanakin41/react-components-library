import type { Preview } from '@storybook/react';
import '../src/style/common.scss';
import {Parameters} from "@storybook/types";

import fivemBackground from '../src/dev/assets/fivem.png';

const preview: Preview = {
	parameters: {
		backgrounds: {
			values: [
				{ name: 'light', value: '#fff' },
				{ name: 'dark', value: '#333' },
			],
		},
		backgroundSizes: {
			values: [
				{ name: 'light', value: '#fff' },
				{ name: 'dark', value: '#333' },
				{ name: 'FiveM', value: 'cover' },
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export const fivemParameters: Parameters = {
	backgrounds: {
		default: 'FiveM',
		values: [
			{ name: 'FiveM', value: `url("${fivemBackground}") center center` },
		],
	},
};

export default preview;
