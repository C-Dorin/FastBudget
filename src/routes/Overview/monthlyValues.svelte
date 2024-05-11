<script>
	export let data;

	let total = data.income[0].totalIncome - data.expense[0].totalExpense;
	let currency = '$';
</script>

<div class="flex justify-between px-6 pt-6">
	<div>
		<p class="font-semibold">Income</p>
		<p class="green_TC">{data.income[0].totalIncome} {currency}</p>
	</div>
	<div>
		<p class="font-semibold">Expenses</p>
		<p class="red_TC">{data.expense[0].totalExpense} {currency}</p>
	</div>
	<div>
		<p class="font-semibold">Total</p>
		{#if total === 0}
			<p class="text-white">{Math.abs(total).toFixed(2)} {currency}</p>
		{:else if total > 0}
			<p class="green_TC">{Math.abs(total).toFixed(2)} {currency}</p>
		{:else if total < 0}
			<p class="red_TC">{Math.abs(total).toFixed(2)} {currency}</p>
		{/if}
	</div>
</div>
