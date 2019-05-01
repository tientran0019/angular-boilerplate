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
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.less'],
})
export default class ButtonComponent {
	@Input()
	text = '';

	@Output()
	onclick = new EventEmitter<any>();
}
