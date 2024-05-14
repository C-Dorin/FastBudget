<script>
	import Mounth from './changeMonth.svelte';
	import Values from './monthlyValues.svelte';
	import { formatNumber } from './localFunctions';

	export let data;
	let colorTotal = '';

	switch (true) {
		case data.accounts.amount === 0:
			colorTotal = 'text-white';
			break;
		case data.accounts.amount > 0:
			colorTotal = 'green_TC';
			break;
		case data.accounts.amount < 0:
			colorTotal = 'red_TC';
			break;
	}

	let currency = '$';
</script>

<!-- Total Summary -->
<div class="p-2">
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
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
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
				{#each data.transactions as transaction}
					<div
						class="flex text-xl p-1 pr-2 justify-between border-r-4 rounded-s-lg pl-1
					{transaction.amount_type === 'income'
							? 'border-green transaction-green_BG'
							: 'border-red transaction-red_BG'}"
					>
						<p class="pl-1">{transaction.category}</p>
						<p>{formatNumber(transaction.amount)} $</p>
					</div>
				{/each}
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
				{#each data.accounts as account, i}
					<div class="flex text-xl p-1 justify-between {i != 6 ? 'border-b' : ''} border-LT pl-1">
						<p>{account.name_account}</p>
						<p class={colorTotal}>{formatNumber(account.amount)} {currency}</p>
					</div>
				{/each}
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
