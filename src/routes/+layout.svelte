<script>
	import '$lib/app.css';
	const imgURL = new URL('$lib/assets/BGIMG.png', import.meta.url).href;
</script>

<svelte:head>
	<title>ITFixer - PC Services</title>
	<meta
		name="description"
		content="გაქვთ კომპიუტერული პრობლემები? დაგვირეკეთ! შეაკეთეთ კომპიუტერი და ისარგებლეთ სხვა სერვისებით!"
	/>
	<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
</svelte:head>

<div
	style:background-image="url({imgURL})"
	class="h-screen w-full bg-center bg-no-repeat bg-cover overflow-hidden"
>
	<slot />
</div>
