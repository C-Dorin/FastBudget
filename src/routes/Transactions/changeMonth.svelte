<script>
	import { onMount } from 'svelte';
	import { monthValue, increaseMonth, decreaseMonth } from '$lib/Components/globalFunctions';
	import { fetchInitialData } from '$lib/Components/globalFunctions';
	let isLoading = false;

	async function handleIncreaseMonth() {
		isLoading = true;
		await increaseMonth();
		isLoading = false;
	}

	async function handleDecreaseMonth() {
		isLoading = true;
		await decreaseMonth();
		isLoading = false;
	}

	onMount(async () => {
		isLoading = true;
		await fetchInitialData();
		isLoading = false;
	});
</script>

<div class="flex text-2xl justify-between">
	<button class="flex items-center" on:click={handleDecreaseMonth} disabled={isLoading}>
		<span class="material-symbols-outlined"> arrow_back_ios </span>
	</button>
	<p class="pb-2 border-b border-LT" style="width: 40%;">{$monthValue}</p>
	<button class="flex items-center" on:click={handleIncreaseMonth} disabled={isLoading}>
		<span class="material-symbols-outlined"> arrow_forward_ios </span>
	</button>
</div>
