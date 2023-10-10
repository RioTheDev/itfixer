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
	import { onMount } from 'svelte';
	const services = [
		{ name: 'დისტანციური\nდახმარება', pic: headphones },
		{ name: 'საოფისე\nპროგრამები', pic: office },
		{ name: 'სისტემის\nგამართვა', pic: system },
		{ name: 'IT OUTSOURCING', pic: outsource },
		{ name: 'ვინდოუსის\nგადაყენება', pic: windows },
		{ name: 'მოწყობილობის\nშეკეთება', pic: wrench },
		{ name: 'ადგილზე\nმოსვლა', pic: bike }
	];
	let scroll: HTMLDivElement;
	onMount(() => {
		const inter = setInterval(() => {
			if (scroll.scrollWidth == scroll.scrollLeft + scroll.clientWidth) {
				scroll.scrollTo({ left: 0 });
			} else {
				scroll.scrollBy({ left: 100 });
			}
		}, 1000);
		return () => clearInterval(inter);
	});
</script>

<div class="flex flex-col h-full w-full">
	<Header />
	<div class="flex-grow flex text-white justify-center items-center flex-col font-nino">
		<img src={smallLogo} alt="Logo at the center" />
		<p class="text-white text-3xl lg:text-4xl xl:text-5xl text-center">
			ხარისხიანი სერვისი ჩვენი პრიორიტეტია<br />
			ითანამშრომლე ჩვენთან, იყავი მშვიდად!
		</p>
		<a
			href="tel:+995599026235"
			class="bg-gradient-to-br m-5 from-[#0E6DDC] to-[#0e6edc3b] rounded-tl-[35px] rounded-br-[35px] rounded-tr-md rounded-bl-md px-10 py-2 text-center hover:opacity-90 active:opacity-80 transition-all"
		>
			<p class="text-sm">დაგვიკავშირდით ნომერზე</p>
			<p class="text-2xl font-bold font-montserrat">599 02 62 35</p>
		</a>
		<div class="flex flex-row justify-center items-center my-14">
			<div
				bind:this={scroll}
				class=" w-[376px] sm:w-[559px] lg:w-[752px] 2xl:w-auto flex snap-mandatory snap-x overflow-x-auto after:relative scrollbar-none scroll-smooth"
			>
				<div class="flex gap-x-5">
					{#each services as service}
						<SmallService name={service.name} pic={service.pic} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
