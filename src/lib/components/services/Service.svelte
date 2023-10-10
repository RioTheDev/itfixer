<script lang="ts">
	export let phoneImg: string;
	export let image: string;
	export let title: string;
	export let desc: string;
</script>

<div
	class="flex w-screen snap-start md:max-w-screen-xl px-5 flex-col md:flex-row text-center items-center md:text-left flex-shrink-0"
>
	<img src={phoneImg} class="h-24 m-5 block md:hidden rounded-md" alt="service-desc" />
	<img src={image} class="w-2/3 md:w-[30vw] mr-5 hidden md:block" alt="service-desc" />
	<div class="flex flex-col text-white font-contractica py-2">
		<h1 class="text-2xl lg:text-3xl font-bold drop-shadow-xl">{title}</h1>
		<p class="text-sm my-5 font-light">{desc}</p>
	</div>
</div>
