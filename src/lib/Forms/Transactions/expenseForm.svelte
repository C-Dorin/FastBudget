<script>
	// @ts-nocheck

	import { addExpenseStatus } from '$lib/Components/globalStore';
	import { addAccountStatus, addCategoryStatus } from '$lib/Components/globalStore';
	import { selectedAccountId, selectedCategoryId } from '$lib/Components/globalStore';
	import { selectedAccountName, selectedAccountIcon } from '$lib/Components/globalStore';
	import { selectedCategoryName, selectedCategoryIcon } from '$lib/Components/globalStore';
	import { addTransaction } from '$lib/Database/SQLFunctions';

	// Variables in Form
	let id_account;
	let id_category;
	let id_account_consignee;
	let amount;
	let date = new Date().toLocaleDateString('eu-MD');
	let time = new Date().toTimeString().split(' ')[0].split(':').slice(0, 2).join(':');
	let id_person;
	let note;

	function defaultButton() {
		$addExpenseStatus = false;
		// Account
		$selectedAccountId = 0;
		$selectedAccountName = '';
		$selectedAccountIcon = '';
		// Category
		$selectedCategoryName = 0;
		$selectedCategoryName = '';
		$selectedCategoryIcon = '';
	}

	function form() {
		function transformDate(date) {
			let [day, month, year] = date.split('/');
			return year + '.' + month + '.' + day;
		}

		let tran_date = transformDate(date) + ' ' + time;
		addTransaction(
			(id_account = $selectedAccountId),
			(id_category = $selectedCategoryId),
			id_account_consignee,
			amount,
			tran_date,
			id_person,
			note
		);
		defaultButton();
	}
</script>

<!-- Add Expense Form-->
<div
	class="flex fixed w-full h-full justify-center items-center"
	style="background-color: rgba(0,0,0,0.5);"
>
	<div class="flex flex-col formSize rounded-lg shadow-lg columbia-blue_BG">
		<div class="text-3xl font-semibold pb-5 p-2 pt-4">
			<p class="text-center">NEW EXPENSE</p>
		</div>
		<form class="p-3">
			<div class="flex flex-col">
				<div class="flex space-x-4">
					<div class="pb-2">
						<p class="font-semibold">Account</p>
						<button
							class="flex border-LT cell content-Light_BG"
							on:click={() => ($addAccountStatus = true)}
						>
							{#if $selectedAccountName === ''}
								<p class="text-gray-400">Select Account</p>
							{:else}
								<span class="material-symbols-outlined pr-2 pt-1">{$selectedAccountIcon}</span>
								<p>{$selectedAccountName}</p>
							{/if}
						</button>
					</div>
					<div class="pb-2">
						<p class="font-semibold">Category</p>
						<button
							class="flex border-LT cell content-Light_BG"
							on:click={() => ($addCategoryStatus = true)}
						>
							{#if $selectedCategoryName === ''}
								<p class="text-gray-400">Select Category</p>
							{:else}
								<span class="material-symbols-outlined pr-2 pt-1">{$selectedCategoryIcon}</span>
								<p>{$selectedCategoryName}</p>
							{/if}
						</button>
					</div>
				</div>
				<div class="flex space-x-4">
					<div class="pb-2">
						<p class="font-semibold">Date</p>
						<input
							class="border-LT cell content-Light_BG"
							type="datetime"
							placeholder="dd/mm/yyyy"
							bind:value={date}
						/>
					</div>
					<div class="pb-2">
						<p class="font-semibold">Time</p>
						<input
							class="border-LT cell content-Light_BG"
							type="datetime"
							placeholder="hh:mm"
							bind:value={time}
						/>
					</div>
				</div>
			</div>
			<div class="pb-2">
				<p class="font-semibold">Amount</p>
				<div class="flex">
					<input
						class="border-LT cell content-Light_BG"
						type="number"
						placeholder="0.00"
						bind:value={amount}
					/>
					<p class="text-2xl pl-2 pt-1">$</p>
				</div>
			</div>
			<div class="pb-2">
				<p class="font-semibold">Note (Optional)</p>
				<input
					class="border-LT note cell content-Light_BG"
					type="text"
					placeholder="Note"
					bind:value={note}
				/>
			</div>
		</form>
		<div class="flex justify-center space-x-4 text-center pt-1">
			<button
				class="p-2 border border-red rounded-lg red_TC w-20 buttonClose"
				on:click={() => defaultButton()}
			>
				<p>Cancel</p>
			</button>
			<button class="p-2 rounded-lg red_BG text-white w-20 buttonSave" on:click={() => form()}>
				<p>Save</p>
			</button>
		</div>
	</div>
</div>

<style>
	.formSize {
		width: 600px;
		height: 450px;
	}

	.cell {
		font-size: 1.5rem; /* 24px */
		line-height: 2rem; /* 32px */ /* text-2xl */
		border-width: 1px; /* border */
		border-radius: 0.375rem; /* 6px */ /* rounded-md */
		padding: 0.25rem; /* 4px */ /* p-1 */
		padding-left: 0.5rem; /* 8px */ /* pl-2 */
		font-weight: 300; /* font-light */
		width: 280px;
	}

	.note {
		width: 576px;
	}

	.buttonSave:hover {
		background-color: rgb(205, 56, 45);
	}

	.buttonClose:hover {
		background-color: rgba(244, 67, 54, 0.3);
	}
</style>
