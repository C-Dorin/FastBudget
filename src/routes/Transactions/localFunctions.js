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

// Make easier to read numbers
export function formatNumber(value) {
	let number = Math.abs(value).toFixed(2);
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export async function addTransaction(
	id_account,
	amount_type,
	category,
	img,
	amount,
	currency,
	date_tran,
	note
) {
	const data = JSON.stringify({
		id_account,
		amount_type,
		category,
		img,
		amount,
		currency,
		date_tran,
		note
	});
	await fetch('api/addTransaction', {
		method: 'POST',
		body: data,
		headers: {
			'content-type': 'application/json'
		}
	});
	location.reload();
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
