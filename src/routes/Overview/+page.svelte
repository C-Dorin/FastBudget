<script>
	import Month from './changeMonth.svelte';
	import Values from './monthlyValues.svelte';
	import { formatNumber } from '$lib/Components/globalFunctions';

	export let data;
	/** @param {number} i */
	function colorTotal(i) {
		let color = '';
		switch (true) {
			case data.accounts[i].amount === 0:
				color = 'text-slate-200';
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

<div class="layout">
	<!-- Total Summary -->
	<div class="overview-total-summary">
		<!-- Backup -->
		<div class="card summary">
			<p class="font-medium">Backup:</p>
			{#if data.backup[0] != null}
				<p class="green_TC">{formatNumber(data.backup[0].amount)} {currency}</p>
			{:else}
				<p class="text-slate-200">0.00 {currency}</p>
			{/if}
		</div>

		<!-- Monthly -->
		<div class="card summary">
			<p class="font-medium">Monthly:</p>
			{#if data.monthly[0] != null}
				<p class="green_TC">{formatNumber(data.monthly[0].amount)} {currency}</p>
			{:else}
				<p class="text-slate-200">0.00 {currency}</p>
			{/if}
		</div>

		<!-- Investment -->
		<div class="card summary">
			<p class="font-medium">Investment:</p>
			{#if data.investment[0] != null}
				<p class="green_TC">{formatNumber(data.investment[0].amount)} {currency}</p>
			{:else}
				<p class="text-slate-200">0.00 {currency}</p>
			{/if}
		</div>
	</div>
	<!-- /Total Summary -->

	<!-- Monthly Summary -->
	<div class="p-2">
		<div class="card monthly-summary">
			<!-- Month -->
			<Month />

			<!-- Values -->
			<Values />
		</div>
	</div>
	<!-- /Monthly Summary -->

	<!-- Cash_movements -->
	<div class="flex space-x-2">
		<!-- First Column -->
		<div class="overview-column">
			<!-- Transactions -->
			<div class="card overview-card">
				<p class="text-2xl">Transactions</p>
				<!-- First 5 Transactions -->
				{#if data.transactions[0] != null}
					{#each data.transactions as transaction}
						<div
							class="overview-transactions {transaction.type_tran === 'Income'
								? 'border-green transaction-green_BG'
								: 'border-red transaction-red_BG'}"
						>
							<p class="pl-1">{transaction.category}</p>
							<p>{formatNumber(transaction.amount)} $</p>
						</div>
					{/each}
				{:else}
					<p class="no-data">No Data</p>
				{/if}
			</div>
			<!-- /Transactions -->

			<!-- Balance -->
			<div class="card overview-card">
				<p class="text-2xl">Balance</p>

				<!-- Total Summary Diagram (Coming soon) -->
				<div class="cooming-soon-card">
					<p class="cooming-soon">Coming soon</p>
				</div>
			</div>
			<!-- /Balance -->
		</div>
		<!-- /First Column -->

		<!-- Second Column -->
		<div class="overview-column">
			<!-- Accounts -->
			<div class="card overview-card">
				<p class="text-2xl">Accounts</p>

				<!-- First 7 Accounts -->
				{#if data.accounts[0] != null}
					{#each data.accounts as account, i}
						<div class="overview-accounts {i != data.accounts.length - 1 ? 'border-b' : ''}">
							<p>{account.account_name}</p>
							<p class={colorTotal(i)}>{formatNumber(account.amount)} {currency}</p>
						</div>
					{/each}
				{:else}
					<p class="no-data">No Data</p>
				{/if}
			</div>
			<!-- /Accounts -->

			<!-- Budgets -->
			<div class="card overview-card">
				<p class="text-2xl">Budgets</p>

				<!-- First 3 Busgets (Coming soon) -->
				<div class="cooming-soon-card">
					<p class="cooming-soon">Coming soon</p>
				</div>
			</div>
			<!-- /Budgets -->
		</div>
		<!-- /Second Column -->
	</div>
	<!-- /Cash_movements -->
</div>
