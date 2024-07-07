<script>
	import { sortByDate } from './localStore';
	import { selectedDateName } from './localStore';
	import { ShowTransactions } from '$lib/Components/globalFunctions';
	import { dateClickedArray, DateNames, prev_index } from './localStore';
	import { get } from 'svelte/store';

	// @ts-ignore
	function handleSelectedAccount(name, index) {
		$selectedDateName = name;
		$sortByDate = false;

		const currentArray = get(dateClickedArray);
		const updatedArray = [...currentArray];

		if (index != $prev_index) {
			$prev_index = index;
			updatedArray[index] = !updatedArray[index];
			if (index + 1 < updatedArray.length) {
				updatedArray[index + 1] = !updatedArray[index + 1];
			} else if (index - 1 >= 0) {
				updatedArray[index - 1] = !updatedArray[index - 1];
			}
		}

		dateClickedArray.set(updatedArray);
		ShowTransactions();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex fixed w-full h-full justify-center items-center"
	style="background-color: rgba(0,0,0,0.5);"
	on:click|self={() => ($sortByDate = false)}
>
	<div class="flex flex-col formSize border rounded-lg shadow-lg content-Light_BG">
		<div class="text-3xl font-light pb-3 p-2 pt-4 text-center">
			<p>Date</p>
		</div>
		<div class="flex flex-col space-y-0.5 w-full">
			{#each DateNames as name, index}
				<button
					class="flex border border-LT rounded p-1 text-left buttonH"
					on:click={() => handleSelectedAccount(name, index)}
					class:clicked={$dateClickedArray[index]}
				>
					{@html name}
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
