<script>
</script>

<!-- Monthly Summary -->
<div class="p-2">
	<div class="p-2 pb-14">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<!-- Month -->
			<div class="flex text-2xl justify-between">
				<button class="flex items-center">
					<span class="material-symbols-outlined"> arrow_back_ios </span>
				</button>
				<p class="pb-2 border-b border-LT" style="width: 40%;">May 2024</p>
				<button class="flex items-center">
					<span class="material-symbols-outlined"> arrow_forward_ios </span>
				</button>
			</div>

			<!-- Values -->
			<div class="flex justify-between px-6 pt-6 pb-2 border-b border-LT">
				<div>
					<p class="font-semibold">Income</p>
					<p class="green_TC">13.050 $</p>
				</div>
				<div>
					<p class="font-semibold">Expenses</p>
					<p class="red_TC">9.890 $</p>
				</div>
				<div>
					<p class="font-semibold">Total</p>
					<p class="green_TC">3.160 $</p>
				</div>
			</div>

			<!-- Sort by -->
			<div class="flex justify-center pt-4">
				<div class="flex flex-col place-items-center space-y-2 text-xl">
					<div class="flex justify-center border border-LT rounded-lg divide-x divide-bice-blue">
						<p class="px-2 w-24 bice-blue_BG rounded-l-md text-slate-200">Date</p>
						<p class="px-2 w-24">Category</p>
						<p class="px-2 w-24">Type</p>
					</div>
					<div class="flex justify-center border border-LT rounded-lg w-36">
						<p class="px-2">1</p>
						<span class="material-symbols-outlined pt-0.5"> arrow_forward </span>
						<p class="px-2">31</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /Monthly Summary -->
	<!-- **************************************** -->

	<!-- Transactions -->
	<div class="p-2 px-52 pt-4">
		<div
			class="space-x-4 flex flex-col p-4 text-center border border-LT rounded-lg columbia-blue_BG"
		>
			<p class="text-2xl">01 May</p>
			<div class="flex justify-between py-2 border-b border-LT red_TC">
				<p>Bar</p>
				<p>25 $</p>
			</div>
			<div class="flex justify-between py-2 red_TC">
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
			<div class="flex justify-between py-2 red_TC">
				<p>Coffee</p>
				<p>40 $</p>
			</div>
		</div>
	</div>
</div>

<!-- /Monthly Summary -->
<!-- **************************************** -->

<style>
	.divide-bice-blue > :not([hidden]) ~ :not([hidden]) {
		--tw-divide-opacity: 1;
		border-color: rgb(0 109 170 / var(--tw-divide-opacity));
	}
</style>
