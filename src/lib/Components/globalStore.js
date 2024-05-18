import { writable } from 'svelte/store';

// ===== Month Changer ===== //
export let addIncomeStatus = writable(false);
export let addExpenseStatus = writable(false);

// ===== Transactions Page ===== //
export let sortBy = writable('Date');
export let optionCategory = writable(1);
export let optionType = writable(1);
export let optionSortBy = writable(0);
