import { writable } from 'svelte/store';

// ===== Month Changer ===== //
export let addIncomeStatus = writable(false);
export let addExpenseStatus = writable(false);
export let addAccountStatus = writable(false);
export let addCategoryStatus = writable(false);

// ===== Transactions Page ===== //
export let sortBy = writable('Date');
export let optionCategory = writable(1);
export let optionType = writable(1);
export let optionSortBy = writable(0);

// ===== Account options ===== //
export let selectedAccountName = writable('');
export let selectedAccountIcon = writable('');
export let selectedCategoryName = writable('');
export let selectedCategoryIcon = writable('');

export const account_options = writable([
	{ name: 'Wallet', icon: 'wallet' },
	{ name: 'Card', icon: 'credit_card' },
	{ name: 'Backup', icon: 'box' }
]);

export const category_income_options = writable([
	{ name: 'Bar', icon: 'local_bar' },
	{ name: 'Coffee', icon: 'local_cafe' },
	{ name: 'GYM', icon: 'exercise' }
]);
