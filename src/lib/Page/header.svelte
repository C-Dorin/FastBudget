<script>
	export let CurrentPage;
</script>

<div class="flex items-center h-12 sapphire">
	<div class="flex items-center space-x-1 text-white">
		<div class="pl-6">
			<button class="flex items-center">
				<span class="material-symbols-outlined menu"> menu </span>
			</button>
		</div>
		<div class="px-4">
			<h1 class="text-xl font-medium pl-2">
				<p>{CurrentPage}</p>
			</h1>
		</div>
	</div>
</div>

<style>
	.sapphire {
		background-color: #0353a4;
	}
</style>
