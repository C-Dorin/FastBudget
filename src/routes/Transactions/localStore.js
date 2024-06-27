import { writable } from 'svelte/store';

export let Date = writable(true);
export let sortByDate = writable(false);
export let selectedDateName = writable(
	'<p class="date-display px-2">31</p> <span class="material-symbols-outlined pt-0.5"> arrow_forward </span> <p class="date-display px-2">01</p>'
);

export let Category = writable(false);
export let sortByCategory = writable(false);
export let selectedCategoryName = writable('');
export let selectedCategoryIcon = writable('');

export let CategoryType = writable(false);
export let sortByCategoryType = writable(false);
export let selectedCategoryTypeName = writable('');
