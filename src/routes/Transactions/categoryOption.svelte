<script>
	import { get } from 'svelte/store';
	import { sortByCategory } from './localStore';
	import { selectedCategoryName, selectedCategoryIcon } from './localStore';
	import { ShowTransactions } from '$lib/Components/globalFunctions';
	import { categoryClickedArray } from './localStore';

	export let categoryOptions;

	// Add 'All' in front of my array
	for (let i = 0; i < categoryOptions.length; i++) {
		categoryOptions[i].id = i + 1;
	}
	let newElement = { id: 0, name: 'All', icon: '' };
	categoryOptions.unshift(newElement);

	// @ts-ignore
	function handleSelectedAccount(category, icon, index) {
		selectedCategoryName.update((categoryNames) => {
			let newCategoryNames = [...categoryNames];
			let exist = false;
			for (let i = 0; i < newCategoryNames.length; i++) {
				if (newCategoryNames[i] === category) {
					exist = true;
					if (i != 0) {
						newCategoryNames.splice(i, 1);
					} else {
						newCategoryNames.splice(1, newCategoryNames.length);
					}
				}
			}
			if (!exist) {
				newCategoryNames[newCategoryNames.length] = category;
			}
			return newCategoryNames;
		});
		$selectedCategoryIcon = icon;
		$sortByCategory = true;

		const currentArray = get(categoryClickedArray);
		const updatedArray = [...currentArray];

		if (index != 0) {
			updatedArray[0] = false;
			updatedArray[index] = !updatedArray[index];
			updatedArray[0] = !updatedArray.slice(1).includes(true);
			categoryClickedArray.set(updatedArray);
		} else {
			updatedArray.fill(false);
			updatedArray[0] = true;
			categoryClickedArray.set(updatedArray);
		}
		ShowTransactions();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex fixed w-full h-full justify-center items-center"
	style="background-color: rgba(0,0,0,0.5);"
	on:click|self={() => ($sortByCategory = false)}
>
	<div class="flex flex-col formSize border rounded-lg shadow-lg content-Light_BG">
		<div class="text-3xl font-light pb-3 p-2 pt-4 text-center">
			<p>Category</p>
		</div>
		{#if categoryOptions}
			<div class="flex flex-col space-y-0.5 w-full">
				{#each categoryOptions as categoryOption, index}
					<button
						class="flex border border-LT rounded p-1 text-left buttonH"
						on:click={() => handleSelectedAccount(categoryOption.name, categoryOption.icon, index)}
						class:clicked={$categoryClickedArray[index]}
					>
						<span class="material-symbols-outlined pr-1">{categoryOption.icon}</span>
						<p>{categoryOption.name}</p>
					</button>
				{/each}
			</div>
		{:else}
			<p>No account options available.</p>
		{/if}
	</div>
</div>

<style>
	.formSize {
		width: 300px;
		height: 350px;
	}

	.buttonH:hover {
		background-color: rgb(185, 214, 242);
	}

	.clicked {
		background-color: rgb(0, 109, 170);
		color: #f1f5f9;
	}

	.buttonH.clicked:hover {
		background-color: rgb(0, 109, 170);
		color: #f1f5f9;
	}
</style>
