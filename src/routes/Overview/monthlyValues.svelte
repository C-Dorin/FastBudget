<script>
	import { formatNumber } from '$lib/Components/globalFunctions';
	import { income, expense } from '$lib/Components/globalFunctions';

	let isLoading = true;

	$: total = $income - $expense;
	$: colorTotal = '';
	$: {
		switch (true) {
			case total === 0:
				colorTotal = 'text-white';
				break;
			case total > 0:
				colorTotal = 'green_TC';
				break;
			case total < 0:
				colorTotal = 'red_TC';
				break;
		}
		isLoading = $income === undefined || $expense === undefined;
	}

	let currency = '$';
</script>

{#if !isLoading}
	<div class="monthly-values">
		<div>
			<p class="font-semibold">Income</p>
			<p class="green_TC">{formatNumber($income)} {currency}</p>
		</div>
		<div>
			<p class="font-semibold">Expenses</p>
			<p class="red_TC">{formatNumber($expense)} {currency}</p>
		</div>
		<div>
			<p class="font-semibold">Total</p>
			<p class={colorTotal}>{formatNumber(total)} {currency}</p>
		</div>
	</div>
{/if}
