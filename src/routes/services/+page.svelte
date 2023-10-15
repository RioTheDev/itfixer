<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Service from '$lib/components/services/Service.svelte';
	import services from '$lib/assets/services';
	import { onMount } from 'svelte';
	import NextPart from '$lib/components/NextPart.svelte';
	let scrollTop: number = 0;
	let scroll: HTMLDivElement | null = null;
</script>

<div
	on:scroll={() => (scrollTop = scroll ? scroll.scrollTop : 0)}
	bind:this={scroll}
	class="flex flex-col h-full scroll-smooth w-full max-w-[100vw] overflow-y-auto z-50 overflow-x-hidden snap-y md:snap-none snap-mandatory scrollbar-w-2"
>
	<Header scroll={scrollTop} />
	<div class="scroll-smooth flex flex-grow md:justify-center mx-auto">
		<div class="flex-col items-center flex justify-start gap-5 my-10">
			{#each services as serv}
				<div class="flex w-full h-screen md:h-auto justify-center items-center">
					<Service {...serv} />
				</div>
			{/each}
		</div>
	</div>
	<NextPart page={scroll} />
</div>
