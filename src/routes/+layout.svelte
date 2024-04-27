<script>
	import '../app.css';
	import Menu from '$lib/Page/menu.svelte';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<!-- Main -->
<div class="flex w-full h-full">
	<!-- Menu -->
	<div class="h-full w-64 fixed">
		<Menu />
	</div>

	<!-- Content -->
	<div class="flex flex-col h-full w-3/4 ml-auto items-center pt-20">
		<slot />
	</div>
</div>
