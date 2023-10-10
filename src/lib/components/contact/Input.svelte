<script lang="ts">
	export let name: string;
	export let input: (event: Event) => void = () => {};
	export let type: string = 'text';
	export let pattern: string = '.*';
	export let placeholder: string = '';
</script>

<div class="flex flex-col text-[#8D8D8D] flex-grow flex-shrink w-full">
	<label class="text-sm" for={name}>{name}</label>
	<input
		{type}
		{name}
		{placeholder}
		{pattern}
		on:input={input}
		class="border-b-[1px] w-full border-[#8D8D8D] bg-transparent focus:border-neutral-400 py-2 transition-all outline-none text-[10px] sm:text-sm placeholder:text-neutral-500"
		required
	/>
</div>
