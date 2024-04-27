<script>
	let currentPage = 'Otherview';

	let smallSizeMenu = 50;
	let bigSizeMenu = 256;
	let currentSizeMenu = bigSizeMenu;

	function resizeInSmallMenu() {
		currentSizeMenu = smallSizeMenu;
	}

	function resizeInBigMenu() {
		currentSizeMenu = bigSizeMenu;
	}
</script>

<!-- Top Menu -->
<div class="w-full top-0 fixed">
	<div class="flex items-center h-12 sapphire">
		<div class="flex items-center space-x-1 text-white">
			<div class="pl-6">
				{#if currentSizeMenu === bigSizeMenu}
					<button class="flex items-center">
						<span class="material-symbols-outlined menu" on:click={resizeInSmallMenu}> menu </span>
					</button>
				{:else if currentSizeMenu === smallSizeMenu}
					<button class="flex items-center">
						<span class="material-symbols-outlined menu" on:click={resizeInBigMenu}> menu </span>
					</button>
				{/if}
			</div>
			<div class="px-4">
				<h1 class="text-xl font-medium pl-2">
					<p>{currentPage}</p>
				</h1>
			</div>
		</div>
	</div>
</div>

<!-- Navigation Menu -->
<nav
	class="flex flex-col h-full pt-14 columbia-blue justify-top resizeMenu"
	style="width: {currentSizeMenu}px;"
>
	<!-- Overview -->
	<a href="/Overview" class="flex flex-row" on:click={() => (currentPage = 'Otherview')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize">donut_large</span>
		{#if currentSizeMenu === bigSizeMenu}
			<p class="pt-1.5">Overview</p>
		{/if}
	</a>

	<!-- Transactions -->
	<a
		href="/Transactions"
		class="flex flex-row"
		on:click={() => {
			currentPage = 'Transactions';
		}}
	>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> receipt_long </span>
		{#if currentSizeMenu === bigSizeMenu}
			<p class="pt-1.5">Transactions</p>
		{/if}
	</a>

	<!-- ScheduledTransactions -->
	<a
		href="/ScheduledTransactions"
		class="flex flex-row"
		on:click={() => (currentPage = 'Scheduled Transactions')}
	>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> schedule </span>
		{#if currentSizeMenu === bigSizeMenu}
			<p class="pt-1.5">Scheduled Transactions</p>
		{/if}
	</a>

	<!-- Accounts -->
	<a href="/Accounts" class="flex flex-row" on:click={() => (currentPage = 'Accounts')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> account_balance_wallet </span>
		{#if currentSizeMenu === bigSizeMenu}
			<p class="pt-1.5">Accounts</p>
		{/if}
	</a>

	<!-- Budgets -->
	<a href="/Budgets" class="flex flex-row" on:click={() => (currentPage = 'Budgets')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> inventory_2 </span>
		{#if currentSizeMenu === bigSizeMenu}
			<p class="pt-1.5">Budgets</p>
		{/if}
	</a>

	<!-- Debts -->
	<a href="/Debts" class="flex flex-row" on:click={() => (currentPage = 'Debts')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> timelapse </span>
		{#if currentSizeMenu === bigSizeMenu}
			<p class="pt-1.5">Debts</p>
		{/if}
	</a>

	<!-- Calendar -->
	<a href="/Calendar" class="flex flex-row" on:click={() => (currentPage = 'Calendar')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> calendar_month </span>
		{#if currentSizeMenu === bigSizeMenu}
			<p class="pt-1.5">Calendar</p>
		{/if}
	</a>

	<!-- Settings -->
	<a href="/Settings" class="flex flex-row" on:click={() => (currentPage = 'Settings')}>
		<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> settings </span>
		{#if currentSizeMenu === bigSizeMenu}
			<p class="pt-1.5">Settings</p>
		{/if}
	</a>
</nav>

<style>
	.sapphire {
		background-color: #0353a4;
	}

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
