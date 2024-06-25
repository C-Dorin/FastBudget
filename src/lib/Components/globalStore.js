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

// Account options
export let selectedAccountId = writable(0);
export let selectedAccountName = writable('');
export let selectedAccountIcon = writable('');

// Category options
export let selectedCategoryId = writable(0);
export let selectedCategoryName = writable('');
export let selectedCategoryIcon = writable('');
