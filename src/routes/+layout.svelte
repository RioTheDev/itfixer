<script>
	import '$lib/app.css';
</script>

<svelte:head>
	<title>ITFixer - კომპიუტერული სერვისი</title>
	<meta
		name="description"
		content="ხარისხიანი სერვისი ჩვენი პრიორიტეტია ითანამშრომლე ჩვენთან, იყავი მშვიდად!"
	/>
	<link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
	<meta
		name="keywords"
		content="ვინდოუსის გადაყენება, ოფისის ჩაწერა, პროგრამების ჩაწერა, კომპიუტერის შეკეთება, kompiuteris xelosani, კომპიუტერის ხელოსანი, ფოტოშოპის ჩაწერა"
	/>
</svelte:head>

<div
	style:background-image="url('BGIMG.png')"
	class="h-screen w-full bg-center bg-no-repeat bg-cover overflow-hidden bg-[rgb(30,31,43)]"
>
	<slot />
</div>
