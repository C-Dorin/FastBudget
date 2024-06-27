<script>
	import { sortByCategoryType } from './localStore';
	import { selectedCategoryTypeName } from './localStore';

	const categoryTypeNames = ['All', 'Income', 'Expense', 'Transfer'];

	// @ts-ignore
	function handleSelectedAccount(name) {
		$selectedCategoryTypeName = name;
		$sortByCategoryType = false;
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
			{#each categoryTypeNames as name}
				<button
					class="flex border border-LT rounded p-1 text-left buttonH"
					on:click={() => handleSelectedAccount(name)}
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
</style>
