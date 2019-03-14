/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-03-14 06:23:49
*------------------------------------------------------- */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import ComponentsModule from './components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,

		ComponentsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
