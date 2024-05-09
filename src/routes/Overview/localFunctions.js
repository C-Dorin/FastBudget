// @ts-nocheck
//
// Until this functions will be here

import { writable } from 'svelte/store';

// ===== Month Changer ===== //
export let monthValue = writable(
	new Date().toLocaleString('default', {
		month: 'long',
		year: 'numeric'
	})
);

export function increaseMonth() {
	monthValue.update((month) => {
		const monthUpdate = new Date(month);
		monthUpdate.setMonth(monthUpdate.getMonth() + 1);
		return monthUpdate.toLocaleString('default', {
			month: 'long',
			year: 'numeric'
		});
	});
}

export function decreaseMonth() {
	monthValue.update((month) => {
		const monthUpdate = new Date(month);
		monthUpdate.setMonth(monthUpdate.getMonth() - 1);
		return monthUpdate.toLocaleString('default', {
			month: 'long',
			year: 'numeric'
		});
	});
}
