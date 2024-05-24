<script>
	import { addCategoryStatus, category_income_options } from '$lib/Components/globalStore';
	import { selectedCategoryName, selectedCategoryIcon } from '$lib/Components/globalStore';

	// @ts-ignore
	function handleSelectedAccount(category, icon) {
		$selectedCategoryName = category;
		$selectedCategoryIcon = icon;
		$addCategoryStatus = false;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex fixed w-full h-full justify-center items-center"
	style="background-color: rgba(0,0,0,0.5);"
	on:click|self={() => ($addCategoryStatus = false)}
>
	<div class="flex flex-col formSize border rounded-lg shadow-lg content-Light_BG">
		<div class="text-3xl font-light pb-3 p-2 pt-4 text-center">
			<p>Account</p>
		</div>
		<div class="flex flex-col space-y-0.5 w-full">
			{#each $category_income_options as category_income_options}
				<button
					class="flex border border-LT rounded p-1 text-left buttonH"
					on:click={() =>
						handleSelectedAccount(category_income_options.name, category_income_options.icon)}
				>
					<span class="material-symbols-outlined pr-1">{category_income_options.icon}</span>
					<p>{category_income_options.name}</p>
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
