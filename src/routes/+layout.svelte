<script>
	import '../app.css';
	import Page from '$lib/Page/page.svelte';

	/** @type {number} */
	export let currentSizeMenu;
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<!-- Top Menu || Navigation Menu -->
<Page />

<!-- Content -->
<div class="p-2">
	<div class="pt-12 {currentSizeMenu === 56 ? 'pl-14' : 'pl-64'}">
		<slot />
	</div>
</div>
