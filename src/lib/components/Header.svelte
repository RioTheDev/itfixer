<script lang="ts">
	import Logo from '$lib/assets/Logo.png';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	const navs = [
		{ name: 'მთავარი', href: '/' },
		{ name: 'სერვისები', href: '/services' }
	];
	let show = true;
	let ready = false;
	onMount(() => {
		console.log('e');
		ready = true;
	});
	export let scroll = 0;
</script>

<div class="h-20 shrink-0" />
<div
	class="w-full px-5 fixed flex flex-col justify-center items-center left-0 transition-all -top-0 font-nino {scroll >
	10
		? 'backdrop-blur-sm'
		: ''} z-50 text-white"
>
	<div class="flex h-20 max-w-screen-xl w-full justify-between items-center">
		<a href="/"> <img src={Logo} class="h-14" alt="" /> </a>
		<nav class=" text-xl hidden md:flex gap-5">
			{#each navs as nav}
				<a
					class="relative top-1 hover:-translate-y-0.5 {$page.url.pathname === nav.href
						? 'underline'
						: ''} underline-offset-4 decoration-nBlue transition-all"
					href={nav.href}>{nav.name}</a
				>
			{/each}
		</nav>
		<a
			href="contact"
			class="border-nBlue hidden md:flex justify-center items-center border rounded-md w-48 h-14 text-xl hover:scale-[1.03] transition-all {$page
				.url.pathname === '/contact'
				? 'shadow-[0_0_15px_rgba(64,150,252,0.5)]'
				: ''}"><span class="relative top-0.5"> კონტაქტი </span></a
		>
		<button
			class="space-y-1 p-3 block md:hidden"
			on:click={() => {
				show = !show;
				console.log(show);
			}}
			>{#each [1, 2, 3] as i}
				<div class="w-8 bg-nBlue h-1 rounded-md" />
			{/each}</button
		>
	</div>
	<nav class="w-full flex md:hidden justify-between">
		{#each [...navs, { name: 'კონტაქტი', href: '/contact' }] as nav, i}
			{#if show && ready}
				<a
					in:fly={{ x: -400, delay: 100 * i, duration: 1000 }}
					out:fly={{ x: 400, delay: 100 * i, duration: 1000 }}
					class="relative top-1 hover:-translate-y-0.5 hover:underline underline-offset-4 decoration-nBlue transition-all"
					href={nav.href}>{nav.name}</a
				>
			{/if}
		{/each}
	</nav>
</div>
