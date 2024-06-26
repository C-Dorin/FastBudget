<script>
	import Mounth from './changeMonth.svelte';
	import Values from './monthlyValues.svelte';
	import { formatNumber } from '$lib/Components/globalFunctions';

	export let data;
	/** @param {number} i */
	function colorTotal(i) {
		let color = '';
		switch (true) {
			case data.accounts[i].amount === 0:
				color = 'text-white';
				break;
			case data.accounts[i].amount > 0:
				color = 'green_TC';
				break;
			case data.accounts[i].amount < 0:
				color = 'red_TC';
				break;
		}
		return color;
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
				{#if data.backup[0] != null}
					<p class="green_TC">{formatNumber(data.backup[0].amount)} {currency}</p>
				{:else}
					<p class="text-white">0.00 {currency}</p>
				{/if}
			</div>
		</div>

		<!-- Monthly -->
		<div class="w-1/3 p-4 text-center border rounded-lg columbia-blue_BG border-LT">
			<div class="flex justify-between">
				<p class="font-medium">Monthly:</p>
				{#if data.monthly[0] != null}
					<p class="green_TC">{formatNumber(data.monthly[0].amount)} {currency}</p>
				{:else}
					<p class="text-white">0.00 {currency}</p>
				{/if}
			</div>
		</div>

		<!-- Investment -->
		<div class="w-1/3 p-4 text-center border rounded-lg columbia-blue_BG border-LT">
			<div class="flex justify-between">
				<p class="font-medium">Investment:</p>
				{#if data.investment[0] != null}
					<p class="green_TC">{formatNumber(data.investment[0].amount)} {currency}</p>
				{:else}
					<p class="text-white">0.00 {currency}</p>
				{/if}
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
			<Values />
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
				{#if data.transactions[0] != null}
					{#each data.transactions as transaction}
						<div
							class="flex text-xl p-1 pr-2 justify-between border-r-4 rounded-s-lg pl-1
					{transaction.type_tran === 'Income'
								? 'border-green transaction-green_BG'
								: 'border-red transaction-red_BG'}"
						>
							<p class="pl-1">{transaction.category}</p>
							<p>{formatNumber(transaction.amount)} $</p>
						</div>
					{/each}
				{:else}
					<p class="text-gray-400 text-4xl p-16">No Data</p>
				{/if}
			</div>
			<!-- /Transactions -->
			<!-- **************************************** -->

			<!-- Total Summary Diagram -->
			<div
				class="flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG space-y-1"
			>
				<p class="text-2xl">Balance</p>
				<div class="flex py-10 justify-center">
					<p class="p-1 px-2 text-4xl text-blue-800 bg-blue-300 border-2 border-LT rounded-2xl">
						Coming soon
					</p>
				</div>
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
				{#if data.accounts[0] != null}
					{#each data.accounts as account, i}
						<div
							class="flex text-xl p-1 justify-between {i != data.accounts.length - 1
								? 'border-b'
								: ''} border-LT pl-1"
						>
							<p>{account.account_name}</p>
							<p class={colorTotal(i)}>{formatNumber(account.amount)} {currency}</p>
						</div>
					{/each}
				{:else}
					<p class="text-gray-400 text-4xl p-16">No Data</p>
				{/if}
			</div>
			<!-- /Accounts -->
			<!-- **************************************** -->

			<!-- Budgets -->
			<div
				class="flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG space-y-1"
			>
				<p class="text-2xl">Budgets</p>
				<div class="flex py-10 justify-center">
					<p class="p-1 px-2 text-4xl text-blue-800 bg-blue-300 border-2 border-LT rounded-2xl">
						Coming soon
					</p>
				</div>
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
