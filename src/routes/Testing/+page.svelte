<script>
	// @ts-nocheck
	import Month from './changeMonth.svelte';
	import Values from './monthlyValues.svelte';

	export let data;
</script>

<div class="p-2">
	<div class="p-2 pb-14">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<Month />
			<Values {data} />
		</div>
	</div>
</div>
