<script>
	import { page } from '$app/stores';

	let pagesLibrary = [
		{ path: '/Overview', icon: 'donut_large', label: 'Overview' },
		{ path: '/Transactions', icon: 'receipt_long', label: 'Transactions' },
		{ path: '/ScheduledTransactions', icon: 'schedule', label: 'ScheduledTransactions' },
		{ path: '/Accounts', icon: 'account_balance_wallet', label: 'Accounts' },
		{ path: '/Budgets', icon: 'inventory_2', label: 'Budgets' },
		{ path: '/Debts', icon: 'timelapse', label: 'Debts' },
		{ path: '/Calendar', icon: 'calendar_month', label: 'Calendar' },
		{ path: '/Settings', icon: 'settings', label: 'Settings' }
	];

	let smallSizeMenu = 50;
	let bigSizeMenu = 256;
	let currentSizeMenu = bigSizeMenu;

	/** @type {any} */
	let pageWidth;

	function resizeInSmallMenu() {
		currentSizeMenu = smallSizeMenu;
	}

	function resizeInBigMenu() {
		currentSizeMenu = bigSizeMenu;
	}

	/** @type {string} */
	let currentLinkPage;
	$: currentLinkPage = $page.url.pathname;

	let currentPage = 'Overview';
</script>

<svelte:window bind:innerWidth={pageWidth} />

<!-- Top Menu -->
<div class="w-full top-0 fixed">
	<div class="flex items-center h-12 sapphire_BG">
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
<nav class="flex flex-col h-full pt-14 columbia-blue_BG" style="width: {currentSizeMenu}px;">
	{#each pagesLibrary as link}
		<a
			href={link.path}
			class="flex flex-row button {currentLinkPage === link.path
				? 'bice-blue_BG text-slate-200'
				: 'buttonH'}"
			on:click={() => (currentPage = link.label)}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize">{link.icon}</span>
			{#if currentSizeMenu === bigSizeMenu}
				<p class="pt-1.5">{link.label}</p>
			{/if}
		</a>
	{/each}
</nav>

<style>
	.button {
		font-size: 1.125rem; /* 18px */
		line-height: 1.75rem; /* 28px */
		padding: 0.125rem; /* 2px */
	}

	.iconSize {
		font-size: 30px;
	}

	.buttonH:hover {
		background-color: rgb(130, 165, 190);
	}
</style>
