<script>
	import { transactions } from '$lib/Components/globalFunctions';
	import { formatDayTran, formatNumber } from '$lib/Components/globalFunctions';

	let isLoading = true;

	$: isLoading = $transactions.size === 0;
</script>

{#if !isLoading}
	{#each Array.from($transactions) as [transactionDate, entries]}
		<div class="p-2 px-52 pt-4">
			<div
				class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
			>
				<p class="text-2xl">{formatDayTran(new Date(transactionDate))}</p>
				{#each entries as entry, i}
					<div
						class="flex justify-between py-2 {i != entries.length - 1 ? 'border-b border-LT' : ''}
								{entry.type_tran === 'Income' ? 'green_TC' : 'red_TC'}"
					>
						<p>{entry.category}</p>
						<p>{formatNumber(entry.amount)} $</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
{:else}
	<div class="flex justify-center">
		<p class="text-gray-400 text-4xl p-16">No Data</p>
	</div>
{/if}
