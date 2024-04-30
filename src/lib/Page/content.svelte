<script>
	import Overview from '../../routes/Overview/+page.svelte';
	import Transactions from '../../routes/Transactions/+page.svelte';
	import ScheduledTransactions from '../../routes/ScheduledTransactions/+page.svelte';
	import Accounts from '../../routes/Accounts/+page.svelte';
	import Budgets from '../../routes/Budgets/+page.svelte';
	import Debts from '../../routes/Debts/+page.svelte';
	import Calendar from '../../routes/Calendar/+page.svelte';
	import Settings from '../../routes/Settings/+page.svelte';

	let currentPage = 'ew';
</script>

{#if currentPage === 'Overview'}
	<div class="pt-12 pl-52">
		<Overview />
	</div>
{:else if currentPage === 'Transactions'}
	<div>
		<Transactions />
	</div>
{:else if currentPage === 'Scheduled Transactions'}
	<div>
		<ScheduledTransactions />
	</div>
{:else if currentPage === 'Accounts'}
	<div>
		<Accounts />
	</div>
{:else if currentPage === 'Budgets'}
	<div>
		<Budgets />
	</div>
{:else if currentPage === 'Debts'}
	<div>
		<Debts />
	</div>
{:else if currentPage === 'Calendar'}
	<div>
		<Calendar />
	</div>
{:else if currentPage === 'Settings'}
	<div>
		<Settings />
	</div>
{/if}

<style>
</style>
