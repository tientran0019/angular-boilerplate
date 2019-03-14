/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-03-13 01:25:23
*------------------------------------------------------- */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	template: `
		<button (click)="onclick.emit($event)">{{ text }}</button>
	`,
	styles: [
		`
			button {
				border: 1px solid #eee;
				border-radius: 3px;
				background-color: #ffffff;
				cursor: pointer;
				font-size: 15px;
				padding: 3px 10px;
				margin: 10px;
			}
		`,
	],
})
export default class ButtonComponent {
	@Input()
	text = '';

	@Output()
	onclick = new EventEmitter<any>();
}
