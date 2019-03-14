/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-03-14 07:49:47
*------------------------------------------------------- */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import ButtonComponent from './button/button.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
	],
	declarations: [
		ButtonComponent,
	],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		ButtonComponent,
	],
})

export default class ComponentsModule {}
