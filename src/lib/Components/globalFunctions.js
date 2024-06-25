// @ts-nocheck
// There are:
// Often used default functions

import { writable } from 'svelte/store';

// ===== Formats ===== //
export function formatDay(dateString) {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

export function formatDayTran(date) {
	const options = {
		day: '2-digit',
		month: 'long'
	};

	const formattedDate = date.toLocaleString('en-US', options);
	const [month, day] = formattedDate.split(' ');
	return day + ' ' + month;
}

// Make easier to read numbers
export function formatNumber(value) {
	let number = Math.abs(value).toFixed(2);
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ===== Month Changer ===== //
export let monthValue = writable(
	new Date().toLocaleString('default', {
		month: 'long',
		year: 'numeric'
	})
);

export async function increaseMonth() {
	monthValue.update((month) => {
		const monthUpdate = new Date(month);
		monthUpdate.setMonth(monthUpdate.getMonth() + 1);
		return monthUpdate.toLocaleString('default', {
			month: 'long',
			year: 'numeric'
		});
	});
	const response = await fetch('../api/ChangeMonth', {
		method: 'POST',
		body: JSON.stringify({ monthValue }),
		headers: {
			'content-type': 'application/json'
		}
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
