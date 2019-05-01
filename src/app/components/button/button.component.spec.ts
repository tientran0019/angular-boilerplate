/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-03-14 07:50:17
*------------------------------------------------------- */

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import ComponentsModule from 'src/app/components';

@Component({
	selector: 'app-for-test',
	template: `<app-button text="Click"></app-button>`,
})
class HostComponent {
	newValue: string;
	onKeyEvent(eventData: any) { }
}

describe('ButtonComponent', () => {
	let fixture: ComponentFixture<HostComponent>;
	let component: HostComponent;
	let btnDebugElement: DebugElement;
	let inputNativeElement: HTMLInputElement;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [HostComponent],
			imports: [ComponentsModule]
		});
		fixture = TestBed.createComponent(HostComponent);
		component = fixture.componentInstance;
		btnDebugElement = fixture.debugElement.childNodes[0] as DebugElement;
		inputNativeElement = fixture.nativeElement.querySelector('button');
	});

	it('should have expected placeholder', () => {
		expect(btnDebugElement.attributes['placeholder']).toContain(
			'going to do'
		);
	});

	it('should have updatable value', () => {
		component.newValue = 'abcde';
		fixture.detectChanges();
		expect(inputNativeElement.value).toBe(component.newValue);
	});

	it('should respond to keyup event', () => {
		const expectedEventData = 'Key UP';
		btnDebugElement.triggerEventHandler('keyup', expectedEventData);

		expect(component.onKeyEvent).toHaveBeenCalledTimes(1);
		expect(component.onKeyEvent).toHaveBeenCalledWith(expectedEventData);
	});

	it('should respond to keyup.enter event', () => {
		const expectedEventData = 'Enter UP';
		btnDebugElement.triggerEventHandler('keyup.enter', expectedEventData);

		expect(component.onKeyEvent).toHaveBeenCalledTimes(1);
		expect(component.onKeyEvent).toHaveBeenCalledWith(expectedEventData);
	});

	it('should respond to escape event', () => {
		const expectedEventData = 'Escape UP';
		btnDebugElement.triggerEventHandler('keyup.escape', expectedEventData);

		expect(component.onKeyEvent).toHaveBeenCalledTimes(1);
		expect(component.onKeyEvent).toHaveBeenCalledWith(expectedEventData);
	});

	it('should respond to focus and blur', () => {
		expect(btnDebugElement.componentInstance.hasFocus).toBe(
			false,
			'before focus'
		);

		inputNativeElement.dispatchEvent(new Event('focus'));
		expect(btnDebugElement.componentInstance.hasFocus).toBe(
			true,
			'after focus'
		);

		inputNativeElement.dispatchEvent(new Event('blur'));
		expect(btnDebugElement.componentInstance.hasFocus).toBe(
			false,
			'after blur'
		);
	});
});
