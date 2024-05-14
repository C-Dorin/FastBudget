<script>
	import { formatNumber } from './localFunctions';
	export let data;

	let total = data.income[0].totalIncome - data.expense[0].totalExpense;
	let currency = '$';
</script>

<div class="flex justify-between px-6 pt-6">
	<div>
		<p class="font-semibold">Income</p>
		<p class="green_TC">{formatNumber(data.income[0].totalIncome)} {currency}</p>
	</div>
	<div>
		<p class="font-semibold">Expenses</p>
		<p class="red_TC">{formatNumber(data.expense[0].totalExpense)} {currency}</p>
	</div>
	<div>
		<p class="font-semibold">Total</p>
		{#if total === 0}
			<p class="text-white">{formatNumber(total)} {currency}</p>
		{:else if total > 0}
			<p class="green_TC">{formatNumber(total)} {currency}</p>
		{:else if total < 0}
			<p class="red_TC">{formatNumber(total)} {currency}</p>
		{/if}
	</div>
</div>
