<script>
	import Mounth from './changeMonth.svelte';
	import Values from './monthlyValues.svelte';

	export let data;
	let currency = '$';
</script>

<!-- Total Summary -->
<div class="flex justify-between p-2 space-x-4 text-lg">
	<!-- Backup -->
	<div class="w-1/3 p-4 text-center border rounded-lg columbia-blue_BG border-LT">
		<div class="flex justify-between">
			<p class="font-medium">Backup:</p>
			<p class="green_TC">{data.backup[0].amount} {currency}</p>
		</div>
	</div>

	<!-- Monthly -->
	<div class="w-1/3 p-4 text-center border rounded-lg columbia-blue_BG border-LT">
		<div class="flex justify-between">
			<p class="font-medium">Monthly:</p>
			<p class="green_TC">{data.monthly[0].amount} {currency}</p>
		</div>
	</div>

	<!-- Investment -->
	<div class="w-1/3 p-4 text-center border rounded-lg columbia-blue_BG border-LT">
		<div class="flex justify-between">
			<p class="font-medium">Investment:</p>
			<p class="green_TC">{data.investment[0].amount} {currency}</p>
		</div>
	</div>
</div>
<!-- /Total Summary -->
<!-- **************************************** -->

<!-- Monthly Summary -->
<div class="p-2">
	<div class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG">
		<Mounth />
		<Values {data} />
	</div>
</div>
<!-- /Monthly Summary -->
<!-- **************************************** -->

<!-- Cash_movements -->
<div class="flex space-x-2">
	<!-- First Column -->
	<div class="p-2 w-1/2 space-y-4">
		<!-- Transactions -->
		<div
			class="flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG space-y-2"
		>
			<p class="text-2xl">Transactions</p>
			<!-- First Transaction -->
			<div
				class="flex text-xl p-1 pr-2 justify-between border-r-4 border-red transaction-red_BG rounded-s-lg pl-1"
			>
				<p>Fuel</p>
				<p>230 $</p>
			</div>

			<!-- Second Transaction -->
			<div
				class="flex text-xl p-1 pr-2 justify-between border-r-4 border-red transaction-red_BG rounded-s-lg pl-1"
			>
				<p>Bar</p>
				<p>30 $</p>
			</div>

			<!-- Third Tranzaction -->
			<div
				class="flex text-xl p-1 pr-2 justify-between border-r-4 border-green transaction-green_BG rounded-s-lg"
			>
				<p class="pl-1">Dog</p>
				<p>135 $</p>
			</div>

			<!-- Fourth Tranzaction -->
			<div
				class="flex text-xl p-1 pr-2 justify-between border-r-4 border-red transaction-red_BG rounded-s-lg"
			>
				<p class="pl-1">Cat</p>
				<p>74 $</p>
			</div>

			<!-- Fifth Tranzaction -->
			<div
				class="flex text-xl p-1 pr-2 justify-between border-r-4 border-green transaction-green_BG rounded-s-lg"
			>
				<p class="pl-1">Fish</p>
				<p>37 $</p>
			</div>
		</div>
		<!-- /Transactions -->
		<!-- **************************************** -->

		<!-- Total Summary Diagram -->
		<div
			class="flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG space-y-1"
		>
			<p class="text-2xl">Balance</p>
			<p class="text-8xl pt-10">Diagram 🔨</p>
		</div>
		<!-- /Total Summary Diagram -->
		<!-- **************************************** -->
	</div>
	<!-- /First Column -->
	<!-- **************************************** -->

	<!-- Second Column -->
	<div class="p-2 w-1/2 space-y-4">
		<!-- Accounts -->
		<div
			class="flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG space-y-1"
		>
			<p class="text-2xl">Accounts</p>
			<!-- First Account -->
			<div class="flex text-xl p-1 justify-between border-b border-LT pl-1">
				<p>Necessity</p>
				<p class="green_TC">2.300 $</p>
			</div>
			<!-- Second Account -->
			<div class="flex text-xl p-1 justify-between border-b border-LT pl-1">
				<p>Distraction</p>
				<p class="green_TC">560 $</p>
			</div>
			<!-- Third Account -->
			<div class="flex text-xl p-1 justify-between border-b border-LT pl-1">
				<p>Savings</p>
				<p class="green_TC">43.890 $</p>
			</div>
			<!-- Fourth Account -->
			<div class="flex text-xl p-1 justify-between border-b border-LT pl-1">
				<p>Education</p>
				<p class="green_TC">10.000 $</p>
			</div>
			<!-- Fifth Account -->
			<div class="flex text-xl p-1 justify-between border-b border-LT pl-1">
				<p>Investment</p>
				<p class="red_TC">450 $</p>
			</div>
			<!-- Sixth Account -->
			<div class="flex text-xl p-1 justify-between border-b border-LT pl-1">
				<p>Backup</p>
				<p class="green_TC">450.000.000 $</p>
			</div>
			<!-- Seventh Account -->
			<div class="flex text-xl p-1 justify-between pl-1">
				<p>Donation</p>
				<p class="green_TC">8.245 $</p>
			</div>
		</div>
		<!-- /Accounts -->
		<!-- **************************************** -->

		<!-- Budgets -->
		<div
			class="flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG space-y-1"
		>
			<p class="text-2xl">Budgets</p>
			<p class="text-8xl pt-10">Budgets 🔨</p>
		</div>
		<!-- /Budgets -->
		<!-- **************************************** -->
	</div>
	<!-- /Second Column -->
	<!-- **************************************** -->
</div>

<!-- /Cash_movements -->
<!-- **************************************** -->

<style>
	.transaction-red_BG {
		background-color: rgba(244, 67, 54, 0.2);
	}

	.transaction-green_BG {
		background-color: rgba(76, 175, 80, 0.2);
	}
</style>
