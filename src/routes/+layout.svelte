<script>
	import '../app.css';
	import Menu from '$lib/Page/menu.svelte';
	import Content from '$lib/Page/content.svelte';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<!-- Main -->
<div class="flex flex-row w-full h-full">
	<!-- Menu -->
	<div class="flex-none h-full w-64 fixed">
		<Menu />
	</div>

	<!-- Content -->
	<div class="w-full h-full pl-12">
		<Content />
	</div>
</div>
