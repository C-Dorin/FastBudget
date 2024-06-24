<script>
	import { addAccountStatus } from '$lib/Components/globalStore';
	import { selectedAccountName, selectedAccountIcon } from '$lib/Components/globalStore';

	export let accountOptions;

	// @ts-ignore
	function handleSelectedAccount(account, icon) {
		$selectedAccountName = account;
		$selectedAccountIcon = icon;
		$addAccountStatus = false;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex fixed w-full h-full justify-center items-center"
	style="background-color: rgba(0,0,0,0.5);"
	on:click|self={() => ($addAccountStatus = false)}
>
	<div class="flex flex-col formSize border rounded-lg shadow-lg content-Light_BG">
		<div class="text-3xl font-light pb-3 p-2 pt-4 text-center">
			<p>Account</p>
		</div>
		{#if accountOptions}
			<div class="flex flex-col space-y-0.5 w-full">
				{#each accountOptions as accountOption}
					<button
						class="flex border border-LT rounded p-1 text-left buttonH"
						on:click={() => handleSelectedAccount(accountOption.name, accountOption.icon)}
					>
						<span class="material-symbols-outlined pr-1">{accountOption.icon}</span>
						<p>{accountOption.name}</p>
					</button>
				{/each}
			</div>
		{:else}
			<p>No account options available.</p>
		{/if}
	</div>
</div>

<style>
	.formSize {
		width: 300px;
		height: 350px;
	}

	.buttonH:hover {
		background-color: rgb(185, 214, 242);
	}
</style>
