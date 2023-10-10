<script>
	import Logo from '$lib/assets/Logo.png';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';
	const navs = [
		{ name: 'მთავარი', href: '/' },
		{ name: 'სერვისები', href: '/services' },
		{ name: 'ჩვენს შესახებ', href: '/about' }
	];
	let show = false;
</script>

<div class="w-full px-5">
	<div
		class="mx-auto max-w-screen-xl w-full h-20 text-white justify-between font-nino flex items-center"
	>
		<a href="/"> <img src={Logo} alt="logo" class="w-[170px] lg:w-[200px]" /> </a>
		<nav class="hidden md:flex space-x-4 text-lg lg:text-xl absolute left-1/2 -translate-x-1/2">
			{#each navs as nav}
				<a
					data-sveltekit-preload-data
					class:underline={$page.url.pathname === nav.href}
					class=" decoration-nBlue hover:-translate-y-0.5 transition-all underline-offset-8"
					href={nav.href}>{nav.name}</a
				>
			{/each}
		</nav>
		<a
			href="/contact"
			data-sveltekit-preload-data
			class="border-nBlue {$page.url.pathname === '/contact'
				? 'shadow-[0_0_15px_rgba(64,150,252,0.5)]'
				: null} transition-all hover:scale-[1.03] border-[1px] hidden rounded-lg md:flex w-[170px] lg:w-[200px] h-[50px] justify-center text-xl items-center"
			><span class="relative top-1">კონტაქტი</span></a
		>
		<button on:click={() => (show = !show)} class="space-y-1.5 p-2 block md:hidden">
			{#each [1, 2, 3] as i}
				<div class="bg-nBlue h-1 w-8 rounded-md" />
			{/each}
		</button>
	</div>

	<nav
		in:fly={{ y: 100 }}
		out:fade
		class="mx-auto md:hidden max-w-screen-xl left-0 px-5 w-full flex flex-row justify-between fixed text-white font-nino"
	>
		{#each [...navs, { name: 'კონტაქტი', href: '/contact' }] as nav, i}
			{#if show}
				<a
					data-sveltekit-preload-data
					in:fly={{ x: -400, delay: 100 * i, duration: 1000 }}
					out:fly={{ x: 400, delay: 100 * i, duration: 1000 }}
					href={nav.href}>{nav.name}</a
				>
			{/if}
		{/each}
	</nav>
</div>
