<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let page: HTMLDivElement;
	export let bottom = false;
</script>

{#if !bottom}
	<button
		aria-label="Go down"
		transition:fly={{ duration: 500, y: 100 }}
		class="fixed left-1/2 block md:hidden -translate-x-1/2 bottom-7 hover:-translate-y-2 transition-all p-2"
		on:click={() => {
			page.scrollBy({ top: window.innerHeight });
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6" viewBox="0 0 24 24">
			<path class="fill-white" d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
		</svg>
	</button>
{/if}
