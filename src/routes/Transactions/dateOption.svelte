<script>
	import { sortByDate } from './localStore';
	import { selectedDateName } from './localStore';

	const DateNames = [
		'<p class="date-display px-2">31</p> <span class="material-symbols-outlined pt-0.5"> arrow_forward </span> <p class="date-display px-2">01</p>',
		'<p class="date-display px-2">01</p> <span class="material-symbols-outlined pt-0.5"> arrow_forward </span> <p class="date-display px-2">31</p>'
	];

	// @ts-ignore
	function handleSelectedAccount(name) {
		$selectedDateName = name;
		$sortByDate = false;
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
			{#each DateNames as name}
				<button
					class="flex border border-LT rounded p-1 text-left buttonH"
					on:click={() => handleSelectedAccount(name)}
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
</style>
