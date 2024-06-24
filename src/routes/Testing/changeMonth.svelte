<script>
	import { monthValue, increaseMonth, decreaseMonth } from '$lib/Components/globalFunctions';
</script>

<div class="flex text-2xl justify-between">
	<button class="flex items-center" on:click={() => decreaseMonth()}>
		<span class="material-symbols-outlined"> arrow_back_ios </span>
	</button>
	<p class="pb-2 border-b border-LT" style="width: 40%;">{$monthValue}</p>
	<button class="flex items-center" on:click={() => increaseMonth()}>
		<span class="material-symbols-outlined"> arrow_forward_ios </span>
	</button>
</div>
