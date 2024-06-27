import { writable } from 'svelte/store';

// ===== Transactions Page ===== //
// Add Income/Expense
export let addIncomeStatus = writable(false);
export let addExpenseStatus = writable(false);

// Account options
export let addAccountStatus = writable(false);
export let selectedAccountId = writable(0);
export let selectedAccountName = writable('');
export let selectedAccountIcon = writable('');

// Category options
export let addCategoryStatus = writable(false);
export let selectedCategoryId = writable(0);
export let selectedCategoryName = writable('');
export let selectedCategoryIcon = writable('');
