/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-03-13 01:00:39
*------------------------------------------------------- */

import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import Button from './button.component';

storiesOf('Button', module)
	.add('with text', () => ({
		component: Button,
		props: {
			text: 'Hello Button',
		},
	}))
	.add(
		'with some emoji',
		() => ({
			component: Button,
			props: {
				text: '😀 😎 👍 💯',
			},
		}),
		{ notes: 'My notes on a button with emojis' }
	)
	.add(
		'with some emoji and action',
		() => ({
			component: Button,
			props: {
				text: '😀 😎 👍 💯',
				onClick: action('This was clicked OMG'),
			},
		}),
		{ notes: 'My notes on a button with emojis' }
	);
