<script>
	import '../app.css';
	import Header from '$lib/Page/header.svelte';
	import Menu from '$lib/Page/menu.svelte';
	import Footer from '$lib/Page/footer.svelte';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<div class="flex flex-col">
	<!-- Header -->
	<div class="w-full top-0 fixed">
		<Header />
	</div>

	<!-- Main -->

	<!-- Footer -->
</div>

<slot />
