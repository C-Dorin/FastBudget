import { get, writable } from 'svelte/store';

export let Date = writable(true);
export let sortByDate = writable(false);
export let selectedDateName = writable(
	'<p class="date-display px-2">31</p> <span class="material-symbols-outlined pt-0.5"> arrow_forward </span> <p class="date-display px-2">01</p>'
);
export let prev_index = writable(0);

export let Category = writable(false);
export let sortByCategory = writable(false);
export let selectedCategoryName = writable(['All']);
export let selectedCategoryIcon = writable('');

export let CategoryType = writable(false);
export let sortByCategoryType = writable(false);
export let selectedCategoryTypeName = writable(['All']);

// CSS values
export const DateNames = [
	'<p class="date-display px-2">31</p> <span class="material-symbols-outlined pt-0.5"> arrow_forward </span> <p class="date-display px-2">01</p>',
	'<p class="date-display px-2">01</p> <span class="material-symbols-outlined pt-0.5"> arrow_forward </span> <p class="date-display px-2">31</p>'
];
export const CategoryTypeNames = ['All', 'Income', 'Expense', 'Transfer'];

// Array with colors for each button in Sort by
export let dateClickedArray = writable(Array(DateNames.length).fill(false));
dateClickedArray.update((arr) => {
	const newArr = [...arr];
	newArr[0] = true;
	return newArr;
});

export let categoryClickedArray = writable(Array(get(selectedCategoryName).length).fill(false));
categoryClickedArray.update((arr) => {
	const newArr = [...arr];
	newArr[0] = true;
	return newArr;
});

export let categoryTypeClickedArray = writable(Array(CategoryTypeNames.length).fill(false));
categoryTypeClickedArray.update((arr) => {
	const newArr = [...arr];
	newArr[0] = true;
	return newArr;
});
