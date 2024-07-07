<script>
	import { sortByCategoryType } from './localStore';
	import { selectedCategoryTypeName } from './localStore';
	import { ShowTransactions } from '$lib/Components/globalFunctions';
	import { categoryTypeClickedArray, CategoryTypeNames } from './localStore';
	import { get } from 'svelte/store';

	// @ts-ignore
	function handleSelectedAccount(name, index) {
		selectedCategoryTypeName.update((categoryTypeNames) => {
			let newCategoryNames = [...categoryTypeNames];
			let exist = false;
			for (let i = 0; i < newCategoryNames.length; i++) {
				if (newCategoryNames[i] === name) {
					exist = true;
					if (i != 0) {
						newCategoryNames.splice(i, 1);
					} else {
						newCategoryNames.splice(1, newCategoryNames.length);
					}
				}
			}
			if (!exist) {
				newCategoryNames[newCategoryNames.length] = name;
			}
			return newCategoryNames;
		});
		$sortByCategoryType = true;

		const currentArray = get(categoryTypeClickedArray);
		const updatedArray = [...currentArray];

		if (index != 0) {
			updatedArray[0] = false;
			updatedArray[index] = !updatedArray[index];
			updatedArray[0] = !updatedArray.slice(1).includes(true);
			categoryTypeClickedArray.set(updatedArray);
		} else {
			updatedArray.fill(false);
			updatedArray[0] = true;
			categoryTypeClickedArray.set(updatedArray);
		}
		ShowTransactions();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex fixed w-full h-full justify-center items-center"
	style="background-color: rgba(0,0,0,0.5);"
	on:click|self={() => ($sortByCategoryType = false)}
>
	<div class="flex flex-col formSize border rounded-lg shadow-lg content-Light_BG">
		<div class="text-3xl font-light pb-3 p-2 pt-4 text-center">
			<p>Type</p>
		</div>
		<div class="flex flex-col space-y-0.5 w-full">
			{#each CategoryTypeNames as name, index}
				<button
					class="flex border border-LT rounded p-1 text-left buttonH"
					on:click={() => handleSelectedAccount(name, index)}
					class:clicked={$categoryTypeClickedArray[index]}
				>
					<p>{name}</p>
				</button>
			{/each}
		</div>
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
