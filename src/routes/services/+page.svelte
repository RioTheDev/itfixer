<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Service from '$lib/components/services/Service.svelte';
	import services from '$lib/assets/services';
	import { onMount } from 'svelte';
	let scroll: HTMLDivElement;
	onMount(() => {
		const inter = setInterval(() => {
			if (scroll.scrollWidth == scroll.scrollLeft + scroll.clientWidth) {
				scroll.scrollTo({ left: 0 });
			} else {
				scroll.scrollBy({ left: 100 });
			}
		}, 5000);
		return () => clearInterval(inter);
	});
</script>

<div class="flex flex-col h-full w-full">
	<Header />
	<div
		bind:this={scroll}
		class="overflow-x-auto scroll-smooth flex flex-grow w-screen md:justify-center mx-auto snap-x snap-mandatory"
	>
		<div class="md:flex-col items-center flex justify-center">
			{#each services as serv}
				<Service {...serv} />
			{/each}
		</div>
	</div>
</div>
