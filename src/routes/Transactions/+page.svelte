<script>
	import { sortBy, optionCategory, optionType } from '$lib/Components/globalStore.js';
	import { formatDayTran } from './localFunctions';
	import Mounth from './changeMonth.svelte';
	import Values from './monthlyValues.svelte';

	export let data;

	function sortByDate() {
		$sortBy = 'Date';
	}
	function sortByCategory() {
		$sortBy = 'Category';
		$optionCategory = 1;
	}
	function sortByType() {
		$sortBy = 'Type';
		$optionType = 1;
	}

	function orderDate() {
		let options = ['01', '31'];
		const dateToggle = document.querySelector('.date-toggle');

		if (dateToggle) {
			const dateDisplays = dateToggle.querySelectorAll('.date-display');
			const currentDisplay = dateDisplays[0].textContent;
			dateDisplays[0].textContent = currentDisplay === options[1] ? options[0] : options[1];
			dateDisplays[1].textContent = currentDisplay === options[0] ? options[0] : options[1];
		}
	}

	function orderCategory() {
		let options = ['All', 'Sallary', 'Bar', 'Bursa', "McDonald's"];

		const dateToggle = document.querySelector('.date-toggle');
		if (dateToggle) {
			const dateDisplays = dateToggle.querySelectorAll('.date-display');
			dateDisplays[0].textContent = options[$optionCategory];
			$optionCategory++;
			if ($optionCategory >= options.length) {
				$optionCategory = 0;
			}
		}
	}

	function orderType() {
		let options = ['All', 'Income', 'Expense', 'Transfer'];
		const dateToggle = document.querySelector('.date-toggle');
		if (dateToggle) {
			const dateDisplays = dateToggle.querySelectorAll('.date-display');
			dateDisplays[0].textContent = options[$optionType];
			$optionType++;
			if ($optionType >= options.length) {
				$optionType = 0;
			}
		}
	}
</script>

<!-- Monthly Summary -->
<div class="p-2">
	<div class="p-2 pb-14">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<Mounth />
			<Values {data} />

			<!-- Sort by -->
			<div class="flex justify-center pt-4">
				<div class="flex flex-col place-items-center space-y-2 text-xl">
					<div class="flex justify-center border border-LT rounded-lg divide-x divide-bice-blue">
						{#if $sortBy === 'Date'}
							<button class="px-2 w-24 bice-blue_BG rounded-l-md text-slate-200">Date</button>
							<button class="px-2 w-24" on:click={() => sortByCategory()}>Category</button>
							<button class="px-2 w-24" on:click={() => sortByType()}>Type</button>
						{:else if $sortBy === 'Category'}
							<button class="px-2 w-24" on:click={() => sortByDate()}>Date</button>
							<button class="px-2 w-24 bice-blue_BG text-slate-200">Category</button>
							<button class="px-2 w-24" on:click={() => sortByType()}>Type</button>
						{:else if $sortBy === 'Type'}
							<button class="px-2 w-24" on:click={() => sortByDate()}>Date</button>
							<button class="px-2 w-24" on:click={() => sortByCategory()}>Category</button>
							<button class="px-2 w-24 bice-blue_BG rounded-r-md text-slate-200">Type</button>
						{/if}
					</div>
					{#if $sortBy === 'Date'}
						<button
							class="date-toggle flex justify-center border border-LT rounded-lg w-36 bice-blue_BG text-slate-200"
							on:click={() => orderDate()}
						>
							<p class="date-display px-2">31</p>
							<span class="material-symbols-outlined pt-0.5"> arrow_forward </span>
							<p class="date-display px-2">01</p>
						</button>
					{:else if $sortBy === 'Category'}
						<button
							class="date-toggle flex justify-center border border-LT rounded-lg w-36 bice-blue_BG text-slate-200"
							on:click={() => orderCategory()}
						>
							<p class="date-display px-2">All</p>
						</button>
					{:else if $sortBy === 'Type'}
						<button
							class="date-toggle flex justify-center border border-LT rounded-lg w-36 bice-blue_BG text-slate-200"
							on:click={() => orderType()}
						>
							<p class="date-display px-2">All</p>
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<!-- /Monthly Summary -->
	<!-- **************************************** -->

	<!-- Transactions -->
	{#each data.transactions as [transactionDate, entries]}
		<div class="p-2 px-52 pt-4">
			<div
				class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
			>
				<p class="text-2xl">{formatDayTran(transactionDate)}</p>
				{#each entries as entry, i}
					<div
						class="flex justify-between py-2 {i != entries.length - 1
							? 'border-b border-LT'
							: ''} {entry.amount_type === 'income' ? 'green_TC' : 'red_TC'}"
					>
						<p>{entry.category}</p>
						<p>{entry.amount} $</p>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<!-- /Monthly Summary -->
<!-- **************************************** -->

<style>
	.divide-bice-blue > :not([hidden]) ~ :not([hidden]) {
		--tw-divide-opacity: 1;
		border-color: rgb(0 109 170 / var(--tw-divide-opacity));
	}
</style>
