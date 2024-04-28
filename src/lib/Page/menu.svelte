<script>
	let currentPage = 'Overview';

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

	function resizePageInSmallMenu() {
		if (pageWidth <= 1000) {
			resizeInSmallMenu();
		}
	}
</script>

<svelte:window bind:innerWidth={pageWidth} />

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
	class="flex flex-col h-full pt-14 columbia-blue justify-top"
	style="width: {currentSizeMenu}px;"
	on:resize={() => resizePageInSmallMenu}
>
	<!-- bug -->
	<!-- Overview -->
	{#if currentPage === 'Overview'}
		<a
			href="/Overview"
			class="flex flex-row bice-blue button text-slate-200"
			on:click={() => (currentPage = 'Overview')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize">donut_large</span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Overview</p>
			{/if}
		</a>
	{:else}
		<a
			href="/Overview"
			class="flex flex-row button buttonH"
			on:click={() => (currentPage = 'Overview')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize">donut_large</span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Overview</p>
			{/if}
		</a>
	{/if}

	<!-- Transactions -->
	{#if currentPage === 'Transactions'}
		<a
			href="/Transactions"
			class="flex flex-row bice-blue button text-slate-200"
			on:click={() => {
				currentPage = 'Transactions';
			}}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> receipt_long </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Transactions</p>
			{/if}
		</a>
	{:else}
		<a
			href="/Transactions"
			class="flex flex-row button buttonH"
			on:click={() => {
				currentPage = 'Transactions';
			}}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> receipt_long </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Transactions</p>
			{/if}
		</a>
	{/if}

	<!-- ScheduledTransactions -->
	{#if currentPage === 'Scheduled Transactions'}
		<a
			href="/ScheduledTransactions"
			class="flex flex-row bice-blue button text-slate-200"
			on:click={() => (currentPage = 'Scheduled Transactions')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> schedule </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Scheduled Transactions</p>
			{/if}
		</a>
	{:else}
		<a
			href="/ScheduledTransactions"
			class="flex flex-row button buttonH"
			on:click={() => (currentPage = 'Scheduled Transactions')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> schedule </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Scheduled Transactions</p>
			{/if}
		</a>
	{/if}

	<!-- Accounts -->
	{#if currentPage === 'Accounts'}
		<a
			href="/Accounts"
			class="flex flex-row bice-blue button text-slate-200"
			on:click={() => (currentPage = 'Accounts')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> account_balance_wallet </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Accounts</p>
			{/if}
		</a>
	{:else}
		<a
			href="/Accounts"
			class="flex flex-row button buttonH"
			on:click={() => (currentPage = 'Accounts')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> account_balance_wallet </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Accounts</p>
			{/if}
		</a>
	{/if}

	<!-- Budgets -->
	{#if currentPage === 'Budgets'}
		<a
			href="/Budgets"
			class="flex flex-row bice-blue button text-slate-200"
			on:click={() => (currentPage = 'Budgets')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> inventory_2 </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Budgets</p>
			{/if}
		</a>
	{:else}
		<a
			href="/Budgets"
			class="flex flex-row button buttonH"
			on:click={() => (currentPage = 'Budgets')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> inventory_2 </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Budgets</p>
			{/if}
		</a>
	{/if}

	<!-- Debts -->
	{#if currentPage === 'Debts'}
		<a
			href="/Debts"
			class="flex flex-row bice-blue button text-slate-200"
			on:click={() => (currentPage = 'Debts')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> timelapse </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Debts</p>
			{/if}
		</a>
	{:else}
		<a href="/Debts" class="flex flex-row button buttonH" on:click={() => (currentPage = 'Debts')}>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> timelapse </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Debts</p>
			{/if}
		</a>
	{/if}

	<!-- Calendar -->
	{#if currentPage === 'Calendar'}
		<a
			href="/Calendar"
			class="flex flex-row bice-blue button text-slate-200"
			on:click={() => (currentPage = 'Calendar')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> calendar_month </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Calendar</p>
			{/if}
		</a>
	{:else}
		<a
			href="/Calendar"
			class="flex flex-row button buttonH"
			on:click={() => (currentPage = 'Calendar')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> calendar_month </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Calendar</p>
			{/if}
		</a>
	{/if}

	<!-- Settings -->
	{#if currentPage === 'Settings'}
		<a
			href="/Settings"
			class="flex flex-row bice-blue button text-slate-200"
			on:click={() => (currentPage = 'Settings')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> settings </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Settings</p>
			{/if}
		</a>
	{:else}
		<a
			href="/Settings"
			class="flex flex-row button buttonH"
			on:click={() => (currentPage = 'Settings')}
		>
			<span class="material-symbols-outlined p-2 pt-1 pr-3 iconSize"> settings </span>
			{#if currentSizeMenu === bigSizeMenu && pageWidth > 1000}
				<p class="pt-1.5">Settings</p>
			{/if}
		</a>
	{/if}
</nav>

<style>
	.sapphire {
		background-color: #0353a4;
	}

	.bice-blue {
		background-color: #006daa;
	}

	.columbia-blue {
		background-color: rgb(185, 214, 242);
	}

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
