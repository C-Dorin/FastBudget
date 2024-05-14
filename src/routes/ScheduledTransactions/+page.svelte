<script>
</script>

<div class="p-2">
	<div class="p-2 pb-14">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<!-- Sort by -->
			<div class="flex p-2 justify-center border-b border-LT">
				<div class="flex flex-col place-items-center space-y-2 text-xl">
					<div class="flex justify-center border border-LT rounded-lg divide-x divide-bice-blue">
						<p class="px-2 w-24 bice-blue_BG rounded-l-md text-slate-200">Income</p>
						<p class="px-2 w-24">Expense</p>
						<p class="px-2 w-24">Transfers</p>
						<p class="px-2 w-24">Budgets</p>
					</div>

					<div class="flex justify-center border border-LT rounded-lg divide-x divide-bice-blue">
						<p class="px-2 w-24 bice-blue_BG rounded-l-md text-slate-200">Weekly</p>
						<p class="px-2 w-24">Monthly</p>
					</div>
				</div>
			</div>
			<div class="flex justify-evenly">
				<div>
					<p class="font-semibold">Income</p>
					<p class="green_TC">4.050 $</p>
				</div>
				<div>
					<p class="font-semibold">Expenses</p>
					<p class="red_TC">2.890 $</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Transactions -->
	<div class="p-2 px-52 pt-4">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<p class="text-2xl">01 May</p>
			<div class="flex justify-between py-2 border-b border-LT green_TC">
				<p>Bar</p>
				<p>25 $</p>
			</div>
			<div class="flex justify-between py-2 green_TC">
				<p>Coffee</p>
				<p>40 $</p>
			</div>
		</div>
	</div>

	<div class="p-2 px-52 pt-4">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<p class="text-2xl">04 May</p>
			<div class="flex justify-between py-2 border-b border-LT green_TC">
				<p>Sallary</p>
				<p>40.000 $</p>
			</div>
			<div class="flex justify-between py-2 green_TC">
				<p>Coffee</p>
				<p>40 $</p>
			</div>
		</div>
	</div>
</div>

<style>
	.divide-bice-blue > :not([hidden]) ~ :not([hidden]) {
		--tw-divide-opacity: 1;
		border-color: rgb(0 109 170 / var(--tw-divide-opacity));
	}
</style>
