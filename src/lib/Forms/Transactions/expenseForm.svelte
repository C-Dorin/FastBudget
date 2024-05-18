<script>
	// @ts-nocheck

	import { addExpenseStatus } from '$lib/Components/globalStore';
	import { addTransaction } from '../../../routes/Overview/localFunctions.js';

	// Variables in Form
	let id_account;
	let amount_type = 'expense';
	let img = 4;
	let category;
	let currency = '$';
	let amount;
	let date = new Date().toLocaleDateString('eu-MD');
	let time = new Date().toTimeString().split(' ')[0].split(':').slice(0, 2).join(':');
	let note;

	function form() {
		function transformDate(date) {
			let [day, month, year] = date.split('/');
			return year + '.' + month + '.' + day;
		}

		let date_tran = transformDate(date) + ' ' + time;
		addTransaction(id_account, amount_type, category, img, amount, currency, date_tran, note);
		$addExpenseStatus = false;
	}
</script>

<!-- Add Expense Form-->
<div
	class="flex fixed w-full h-full justify-center items-center"
	style="background-color: rgba(0,0,0,0.5);"
>
	<div class="flex flex-col formSize border rounded-lg shadow-lg content-Light_BG">
		<div class="text-3xl font-semibold pb-5 p-2 pt-4">
			<p class="text-center">NEW EXPENSE</p>
		</div>
		<form class="p-3">
			<div class="flex flex-col">
				<div class="flex space-x-4">
					<div class="pb-2">
						<p class="font-semibold">Account</p>
						<select class="border-LT cell" bind:value={id_account}>
							<option value="1">Wallet</option>
							<option value="2">Card</option>
							<option value="3">Backup</option>
							<option value="4">Cheesebuger</option>
						</select>
					</div>
					<div class="pb-2">
						<p class="font-semibold">Category</p>
						<select class="border-LT cell" bind:value={category}>
							<option value="Bar">Bar</option>
							<option value="GYM">GYM</option>
							<option value="McDonald's">McDonald's</option>
							<option value="Energy Bill">Energy Bill</option>
						</select>
					</div>
				</div>
				<div class="flex space-x-4">
					<div class="pb-2">
						<p class="font-semibold">Date</p>
						<input
							class="border-LT cell"
							type="datetime"
							placeholder="dd/mm/yyyy"
							bind:value={date}
						/>
					</div>
					<div class="pb-2">
						<p class="font-semibold">Time</p>
						<input class="border-LT cell" type="datetime" placeholder="hh:mm" bind:value={time} />
					</div>
				</div>
			</div>
			<div class="pb-2">
				<p class="font-semibold">Amount</p>
				<div class="flex">
					<input class="border-LT cell" type="number" bind:value={amount} />
					<p class="text-2xl pl-2 pt-1">$</p>
				</div>
			</div>
			<div class="pb-2">
				<p class="font-semibold">Note (Optional)</p>
				<input class="border-LT note cell" type="text" bind:value={note} />
			</div>
		</form>
		<div class="flex justify-center space-x-4 text-center pt-1">
			<button
				class="p-2 border border-red rounded-lg red_TC w-20 buttonClose"
				on:click={() => ($addExpenseStatus = false)}
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
		width: 277px;
	}

	.note {
		width: 570px;
	}

	.buttonSave:hover {
		background-color: rgb(205, 56, 45);
	}

	.buttonClose:hover {
		background-color: rgba(244, 67, 54, 0.3);
	}
</style>
