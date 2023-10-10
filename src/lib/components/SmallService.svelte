<script lang="ts">
	export let name: string;
	export let pic: string;
	const spl = name.split('\\n');
</script>

<div
	class="flex flex-shrink-0 snap-start select-none flex-col items-center justify-between font-contractica border-[#2BB2FF] border-[1px] rounded-lg w-[173px] h-[205px] py-5"
>
	<p class="font-bold text-[#A0CCFF] whitespace-pre-line text-center">
		{#each spl as spls}
			{spls}
			<br />
		{/each}
	</p>
	<div class="flex flex-grow w-full scale-90 justify-center items-center">
		<img src={pic} class="w-20 my-2" alt="service" />
	</div>
</div>
