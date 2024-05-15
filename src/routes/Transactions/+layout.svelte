<script>
	import { addIncomeStatus, addExpenseStatus } from '$lib/Components/globalStore';
</script>

<!-- Buttons for adding Transactions-->
<!-- Add Expense -->
<div class="fixed bottom-8 right-8">
	<button
		class="p-2 border rounded-full text-2xl w-16 h-16 red_BG border-red text-slate-200 shadow-xl"
		style="border-color: rgb(143, 39, 31);"
		on:click={() => ($addExpenseStatus = true)}
	>
		<span class="material-symbols-outlined pt-2"> remove </span>
	</button>
</div>
<!-- Add Income -->
<div class="fixed bottom-28 right-8">
	<button
		class="p-2 border rounded-full text-2xl w-16 h-16 green_BG border-green text-slate-200 shadow-xl"
		style="border-color: rgb(63, 145, 66);"
		on:click={() => ($addIncomeStatus = true)}
	>
		<span class="material-symbols-outlined pt-2"> add </span>
	</button>
</div>

<slot />
