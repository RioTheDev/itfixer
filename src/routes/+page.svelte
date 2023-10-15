<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import smallLogo from '$lib/assets/smallLogo.png';
	import SmallService from '$lib/components/SmallService.svelte';
	import headphones from '$lib/assets/services/headphone.svg';
	import bike from '$lib/assets/services/bike.svg';
	import office from '$lib/assets/services/office.svg';
	import outsource from '$lib/assets/services/outsource.svg';
	import system from '$lib/assets/services/system.svg';
	import windows from '$lib/assets/services/windows.svg';
	import wrench from '$lib/assets/services/wrench.svg';
	import apple from '$lib/assets/services/apple.svg';
	import whatsapp from '$lib/assets/contacts/whatsapp.svg';
	import telegram from '$lib/assets/contacts/telegram.svg';
	import { onMount } from 'svelte';
	const services = [
		{ name: 'დისტანციური\nდახმარება', pic: headphones },
		{ name: 'გამოძახებითი\nმომსახურება', pic: bike },
		{ name: 'Apple MacOS\nაპლიკაციები', pic: apple, size: 120 },

		{ name: 'საოფისე\nპროგრამები', pic: office },
		{ name: 'IT OUTSOURCING', pic: outsource, size: 100 },
		{ name: 'ვინდოუსის\nგადაყენება', pic: windows },
		{ name: 'მოწყობილობის\nშეკეთება', pic: wrench },
		{ name: 'ქსელური\nხარვეზები', pic: system }
	];
	let scroll: HTMLDivElement;
	const onClick = (left: boolean) => {
		scroll.scrollBy({ left: left ? -376 : 376 });
	};
	onMount(() => {
		if (!scroll) return;
		setTimeout(() => {
			scroll.scrollBy({ left: 376 });
			setTimeout(() => {
				scroll.scrollBy({ left: 376 });
				setTimeout(() => {
					scroll.scrollBy({ left: 376 });
				}, 2000);
			}, 2000);
		}, 1300);
	});
</script>

<div class="flex flex-col h-full w-full">
	<Header />
	<div class="flex-grow flex text-white justify-center items-center flex-col font-nino">
		<img src={smallLogo} alt="Logo at the center" />
		<p class="text-white text-3xl lg:text-4xl xl:text-5xl text-center">
			<span class="font-bold [text-shadow:0_0_25px_rgba(64,150,252,0.7)]">IT</span>

			დახმარების <span class="hidden sm:inline-block">პროფესიონალთა</span> ჯგუფი <br /> თქვენს ზარს ელოდება!
		</p>
		<div class="flex justify-center items-center">
			<a target="_blank" class="hover:scale-105 transition-all" href="https://wa.me/995599026235">
				<img src={whatsapp} alt="whatsapp" class="h-[45px]" />
			</a>
			<a
				href="tel:+995599026235"
				class="bg-gradient-to-br m-5 from-[#0E6DDC] to-[#0e6edc3b] rounded-tl-[35px] rounded-br-[35px] rounded-tr-md rounded-bl-md px-10 py-2 text-center hover:opacity-90 active:opacity-80 transition-all"
			>
				<p class="text-sm">დაგვიკავშირდით ნომერზე</p>
				<p class="text-2xl font-bold font-montserrat">599 02 62 35</p>
			</a>
			<a target="_blank" href="https://t.me/itfixer" class="hover:scale-105 transition-all"
				><img src={telegram} class="relative h-11" alt="telegram" /></a
			>
		</div>
		<div class="flex flex-row justify-center items-center my-14 -translate-y-[2px]">
			<button
				on:click={() => {
					onClick(true);
				}}
				class=" px-3 rounded-full relative z-50 translate-x-1/2 2xl:hidden bg-nBlue/80"
				><svg xmlns="http://www.w3.org/2000/svg" class="rotate-90 h-7 w-7" viewBox="0 0 24 24">
					<path
						class="fill-white"
						d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
					/>
				</svg></button
			>
			<div
				bind:this={scroll}
				class=" w-[376px] sm:w-[559px] lg:w-[752px] 2xl:w-auto flex snap-mandatory snap-x overflow-x-auto after:relative scrollbar-none scroll-smooth"
			>
				<div class="flex gap-x-5">
					{#each services as service}
						<SmallService name={service.name} pic={service.pic} size={service.size} />
					{/each}
				</div>
			</div>
			<button
				on:click={() => {
					onClick(false);
				}}
				class=" px-3 rounded-full z-50 relative -translate-x-1/2 2xl:hidden bg-nBlue/80"
				><svg xmlns="http://www.w3.org/2000/svg" class="-rotate-90 h-7 w-7" viewBox="0 0 24 24">
					<path
						class="fill-white"
						d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
					/>
				</svg></button
			>
		</div>
	</div>
</div>
