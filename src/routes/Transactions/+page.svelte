<script>
	import { Date, Category, CategoryType } from './localStore';
	import { sortByDate, sortByCategory, sortByCategoryType } from './localStore';
	import { selectedDateName, selectedCategoryName } from './localStore';
	import { selectedCategoryTypeName } from './localStore';
	import { formatDayTran, formatNumber } from '$lib/Components/globalFunctions';
	import Month from './changeMonth.svelte';
	import Values from './monthlyValues.svelte';

	function DateButton() {
		$Date = true;
		$Category = false;
		$CategoryType = false;
	}
	function CategoryButton() {
		$Date = false;
		$Category = true;
		$CategoryType = false;
	}
	function CategoryTypeButton() {
		$Date = false;
		$Category = false;
		$CategoryType = true;
	}
	export let data;
</script>

<!-- Monthly Summary -->
<div class="p-2">
	<div class="p-2 pb-14">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<Month />
			<Values />

			<!-- Sort by -->
			<div class="flex justify-center pt-4">
				<div class="flex flex-col place-items-center space-y-2 text-xl">
					<div class="flex justify-center border border-LT rounded-lg divide-x divide-bice-blue">
						{#if $Date}
							<button class="px-2 w-24 bice-blue_BG rounded-l-md text-slate-200">Date</button>
							<button class="px-2 w-24" on:click={() => CategoryButton()}>Category</button>
							<button class="px-2 w-24" on:click={() => CategoryTypeButton()}>Type</button>
						{:else if $Category}
							<button class="px-2 w-24" on:click={() => DateButton()}>Date</button>
							<button class="px-2 w-24 bice-blue_BG text-slate-200">Category</button>
							<button class="px-2 w-24" on:click={() => CategoryTypeButton()}>Type</button>
						{:else if $CategoryType}
							<button class="px-2 w-24" on:click={() => DateButton()}>Date</button>
							<button class="px-2 w-24" on:click={() => CategoryButton()}>Category</button>
							<button class="px-2 w-24 bice-blue_BG rounded-r-md text-slate-200">Type</button>
						{/if}
					</div>
					{#if $Date}
						<button
							class="date-toggle flex justify-center border border-LT rounded-lg w-36 bice-blue_BG text-slate-200"
							on:click={() => ($sortByDate = true)}
						>
							{@html $selectedDateName}
						</button>
					{:else if $Category}
						<button
							class="date-toggle flex justify-center border border-LT rounded-lg w-36 bice-blue_BG text-slate-200"
							on:click={() => ($sortByCategory = true)}
						>
							{#if $selectedCategoryName === ''}
								<p class="">Select ...</p>
							{:else}
								<p>{$selectedCategoryName}</p>
							{/if}
						</button>
					{:else if $CategoryType}
						<button
							class="date-toggle flex justify-center border border-LT rounded-lg w-36 bice-blue_BG text-slate-200"
							on:click={() => ($sortByCategoryType = true)}
						>
							{#if $selectedCategoryTypeName === ''}
								<p class="">Select ...</p>
							{:else}
								<p>{$selectedCategoryTypeName}</p>
							{/if}
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
						class="flex justify-between py-2 {i != entries.length - 1 ? 'border-b border-LT' : ''}
							{entry.type_tran === 'Income' ? 'green_TC' : 'red_TC'}"
					>
						<p>{entry.category}</p>
						<p>{formatNumber(entry.amount)} $</p>
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
