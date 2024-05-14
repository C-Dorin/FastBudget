<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { addIncomeStatus, addExpenseStatus } from './Overview/localStore';
	import IncomeForm from './Overview/incomeForm.svelte';
	import ExpenseForm from './Overview/expenseForm.svelte';

	// ===== Page url/name ===== //
	let pagesLibrary = [
		{ path: '/Overview', icon: 'donut_large', label: 'Overview' },
		{ path: '/Transactions', icon: 'receipt_long', label: 'Transactions' },
		{ path: '/ScheduledTransactions', icon: 'schedule', label: 'Scheduled Transactions' },
		{ path: '/Accounts', icon: 'account_balance_wallet', label: 'Accounts' },
		{ path: '/Budgets', icon: 'inventory_2', label: 'Budgets' },
		{ path: '/Debts', icon: 'timelapse', label: 'Debts' },
		{ path: '/Calendar', icon: 'calendar_month', label: 'Calendar' },
		{ path: '/Settings', icon: 'settings', label: 'Settings' }
	];

	/** @type {string} */
	let currentLinkPage;
	$: currentLinkPage = $page.url.pathname;
	let currentPage = 'Overview';

	// ===== Menu size ===== //
	/** @type {number} */
	let pageWidth;
	let smallSizeMenu = 56;
	let bigSizeMenu = 256;
	let currentSizeMenu = bigSizeMenu;

	function resizeInSmallMenu() {
		currentSizeMenu = smallSizeMenu;
	}

	function resizeInBigMenu() {
		currentSizeMenu = bigSizeMenu;
	}

	// Resize the menu when the page is less than 1000 px
	$: {
		if (pageWidth <= 1000) {
			resizeInSmallMenu();
		}
	}
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<svelte:window bind:innerWidth={pageWidth} />

<!-- Top Menu -->
<div class="h-full fixed">
	<div class="flex top-0 fixed w-full h-12 items-center sapphire_BG">
		<div class="flex items-center space-x-1 text-white">
			<!-- Icon Button -->
			<div class="pl-6">
				{#if currentSizeMenu === bigSizeMenu}
					<button class="flex items-center" on:click={resizeInSmallMenu}>
						<span class="material-symbols-outlined menu"> menu </span>
					</button>
				{:else if currentSizeMenu === smallSizeMenu}
					<button class="flex items-center" on:click={resizeInBigMenu}>
						<span class="material-symbols-outlined menu"> menu </span>
					</button>
				{/if}
			</div>
			<!-- Page -->
			<div class="px-4">
				<h1 class="text-xl font-medium pl-2">{currentPage}</h1>
			</div>
		</div>
	</div>

	<!-- Navigation Menu -->
	<nav
		class="flex flex-col h-full pt-14 columbia-blue_BG border-r-2 border-LT"
		style="width: {currentSizeMenu}px;"
	>
		{#each pagesLibrary as page}
			<a
				href={page.path}
				class="flex flex-row button {currentLinkPage === page.path
					? 'bice-blue_BG text-slate-200'
					: 'buttonH'}"
				on:click={() => (currentPage = page.label)}
			>
				<span class="material-symbols-outlined p-2.5 pt-1.5 pr-3 iconSize">{page.icon}</span>
				{#if currentSizeMenu === bigSizeMenu}
					<p class="pt-2">{page.label}</p>
				{/if}
			</a>
		{/each}
	</nav>
</div>

{#if $addIncomeStatus}
	<IncomeForm />
{/if}
{#if $addExpenseStatus}
	<ExpenseForm />
{/if}

<!-- Content -->
<div class="pt-12 {currentSizeMenu === 56 ? 'pl-14' : 'pl-64'}">
	<slot />
</div>

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
