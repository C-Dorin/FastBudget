<script>
	import '../../styles/overview.css';
	import { addIncomeStatus, addExpenseStatus } from '$lib/Components/globalStore';
</script>

<!-- Buttons for adding Transactions-->
<!-- Add Expense -->
<div class="button bottom-8">
	<button class="add_button red_button" on:click={() => ($addExpenseStatus = true)}>
		<span class="material-symbols-outlined pt-2"> remove </span>
	</button>
</div>
<!-- Add Income -->
<div class="button bottom-28">
	<button class="add_button green_button" on:click={() => ($addIncomeStatus = true)}>
		<span class="material-symbols-outlined pt-2"> add </span>
	</button>
</div>

<slot />
