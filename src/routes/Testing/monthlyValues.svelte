<script>
	import { formatNumber } from '$lib/Components/globalFunctions';
	export let data;

	let total = data.income[0].totalIncome - data.expense[0].totalExpense;
	let colorTotal = '';

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
		<p class={colorTotal}>{formatNumber(total)} {currency}</p>
	</div>
</div>
