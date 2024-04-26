<script>
	import Header from './header.svelte';

	let CurrentPage = 'Otherview';
</script>

<div class="w-full top-0 fixed">
	<Header {CurrentPage} />
</div>
<!-- Navigation Menu -->
<nav class="flex flex-col h-full pt-14 columbia-blue justify-top resizeMenu">
	<!-- Overview -->
	<a href="/Overview" class="flex flex-row" on:click={() => (CurrentPage = 'Otherview')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize">donut_large</span>
		<p class="pt-1.5">Overview</p>
	</a>

	<!-- Transactions -->
	<a
		href="/Transactions"
		class="flex flex-row"
		on:click={() => {
			CurrentPage = 'Transactions';
		}}
	>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> receipt_long </span>
		<p class="pt-1.5">Transactions</p>
	</a>

	<!-- ScheduledTransactions -->
	<a
		href="/ScheduledTransactions"
		class="flex flex-row"
		on:click={() => (CurrentPage = 'Scheduled Transactions')}
	>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> schedule </span>
		<p class="pt-1.5">Scheduled Transactions</p>
	</a>

	<!-- Accounts -->
	<a href="/Accounts" class="flex flex-row" on:click={() => (CurrentPage = 'Accounts')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> account_balance_wallet </span>
		<p class="pt-1.5">Accounts</p>
	</a>

	<!-- Budgets -->
	<a href="/Budgets" class="flex flex-row" on:click={() => (CurrentPage = 'Budgets')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> inventory_2 </span>
		<p class="pt-1.5">Budgets</p>
	</a>

	<!-- Debts -->
	<a href="/Debts" class="flex flex-row" on:click={() => (CurrentPage = 'Debts')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> timelapse </span>
		<p class="pt-1.5">Debts</p>
	</a>

	<!-- Calendar -->
	<a href="/Calendar" class="flex flex-row" on:click={() => (CurrentPage = 'Calendar')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> calendar_month </span>
		<p class="pt-1.5">Calendar</p>
	</a>

	<!-- Settings -->
	<a href="/Settings" class="flex flex-row" on:click={() => (CurrentPage = 'Settings')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> settings </span>
		<p class="pt-1.5">Settings</p>
	</a>
</nav>

<style>
	.columbia-blue {
		background-color: rgb(185, 214, 242);
	}

	a {
		font-size: 1.125rem; /* 18px */
		line-height: 1.75rem; /* 28px */
		padding: 0.125rem; /* 2px */
	}

	.iconSize {
		font-size: 30px;
	}
	a:hover {
		background-color: rgb(130, 165, 190);
	}

	@media (max-width: 1000px) {
		.resizeMenu {
			width: 50px;
		}
	}
</style>
