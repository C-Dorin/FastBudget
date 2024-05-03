<script>
	import Overview from './Overview/+page.svelte';
	import Transactions from './Transactions/+page.svelte';
	import ScheduledTransactions from './ScheduledTransactions/+page.svelte';
	import Accounts from './Accounts/+page.svelte';
	import Budgets from './Budgets/+page.svelte';
	import Debts from './Debts/+page.svelte';
	import Calendar from './Calendar/+page.svelte';
	import Settings from './Settings/+page.svelte';

	/** @type {string} */
	export let currentPage;

	/** @type {number} */
	export let currentSizeMenu;
</script>

<div class="pt-12 {currentSizeMenu === 56 ? 'pl-14' : 'pl-64'}">
	{#if currentPage === 'Overview'}
		<Overview />
	{:else if currentPage === 'Transactions'}
		<Transactions />
	{:else if currentPage === 'Scheduled Transactions'}
		<ScheduledTransactions />
	{:else if currentPage === 'Accounts'}
		<Accounts />
	{:else if currentPage === 'Budgets'}
		<Budgets />
	{:else if currentPage === 'Debts'}
		<Debts />
	{:else if currentPage === 'Calendar'}
		<Calendar />
	{:else if currentPage === 'Settings'}
		<Settings />
	{/if}
</div>
