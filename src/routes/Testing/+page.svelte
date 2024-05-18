<script>
	// @ts-nocheck
	import { transactionStore } from './Object';
	import { onDestroy } from 'svelte';

	let groupedByDay = {};
	let unsubscribe;

	// Subscribe to transactionStore and update groupedByDay when the store changes
	unsubscribe = transactionStore.subscribe((transactions) => {
		console.log('Transactions:', unsubscribe); // Debugging step to see the data structure
		groupedByDay = {};
		transactions.forEach((entry) => {
			const day = entry.date_tran.toDateString(); // Convert to string for easier grouping
			groupedByDay[day] = groupedByDay[day] || [];
			groupedByDay[day].push(entry);
		});
		console.log('Grouped by Day:', groupedByDay); // Debugging step to check grouped data
	});

	// Cleanup subscription on component destroy
	onDestroy(() => {
		unsubscribe();
	});
</script>

{#if Object.entries(groupedByDay).length > 0}
	<div class="pl-40">
		<p>Hello world</p>

		{#each Object.entries(groupedByDay) as [day, entries]}
			<h2>{day}</h2>
			<div class="flex flex-col">
				{#each entries as entry}
					<p>{entry.amount}</p>
				{/each}
			</div>
		{/each}
	</div>
{:else}
	<p>Loading data...</p>
{/if}
