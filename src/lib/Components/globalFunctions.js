// @ts-nocheck
// There are:
// Often used default functions

import { writable } from 'svelte/store';
import { get } from 'svelte/store';
import { selectedDateName } from '../../routes/Transactions/localStore';
import { selectedCategoryName } from '../../routes/Transactions/localStore';
import { selectedCategoryTypeName } from '../../routes/Transactions/localStore';

// ===== Formats ===== //
// Format of day (ex: June 02)
export function formatDayTran(date) {
	const options = {
		day: '2-digit',
		month: 'long'
	};

	const formattedDate = date.toLocaleString('en-US', options);
	const [month, day] = formattedDate.split(' ');
	return month + ' ' + day;
}

// Format of number (ex:100,000.00)
export function formatNumber(value) {
	let number = Math.abs(value).toFixed(2);
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ===== Monthly values ===== //
export let income = writable(0);
export let expense = writable(0);

// ===== Month Changer ===== //
export let monthValue = writable(
	new Date().toLocaleString('default', {
		month: 'long',
		year: 'numeric'
	})
);

export function resetMonthValue() {
	let actualMonth = writable(
		new Date().toLocaleString('default', {
			month: 'long',
			year: 'numeric'
		})
	);
	monthValue = actualMonth;
}

async function updateMonthValue(monthString) {
	const response = await fetch('/api/ChangeMonth', {
		method: 'POST',
		body: JSON.stringify({ updatedMonth: monthString }),
		headers: {
			'content-type': 'application/json'
		}
	});

	const data = await response.json();
	income.set(data.totalIncome);
	expense.set(data.totalExpense);

	await updateTransactions(monthString);
}

// Function to fetch and set initial data
export async function fetchInitialData() {
	const initialMonth = get(monthValue);
	await updateMonthValue(initialMonth);
}

export async function increaseMonth() {
	monthValue.update((month) => {
		const monthUpdate = new Date(month);
		monthUpdate.setMonth(monthUpdate.getMonth() + 1);
		return monthUpdate.toLocaleString('default', {
			month: 'long',
			year: 'numeric'
		});
	});
	const updatedMonth = get(monthValue);
	await updateMonthValue(updatedMonth);
}

export async function decreaseMonth() {
	monthValue.update((month) => {
		const monthUpdate = new Date(month);
		monthUpdate.setMonth(monthUpdate.getMonth() - 1);
		return monthUpdate.toLocaleString('default', {
			month: 'long',
			year: 'numeric'
		});
	});
	const updatedMonth = get(monthValue);
	await updateMonthValue(updatedMonth);
}

// ===== Transaction values ===== //
export let transactions = writable(new Map());

async function updateTransactions(monthString) {
	const selectedDate = get(selectedDateName);
	const selectedCategoryType = get(selectedCategoryTypeName);
	let selectedCategory = [];
	selectedCategoryName.subscribe((categoryNames) => {
		selectedCategory = [...categoryNames];
	});

	const response = await fetch('/api/ShowTransactions', {
		method: 'POST',
		body: JSON.stringify({
			updatedMonth: monthString,
			selectedDateName: selectedDate,
			selectedCategoryName: selectedCategory,
			selectedCategoryTypeName: selectedCategoryType
		}),
		headers: {
			'content-type': 'application/json'
		}
	});

	const data = await response.json();
	transactions.set(new Map(data.grouped_results));
}

export async function ShowTransactions() {
	const updatedMonth = get(monthValue);
	await updateTransactions(updatedMonth);
}
