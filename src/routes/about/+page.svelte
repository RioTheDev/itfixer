<script>
	import pic from '$lib/assets/about/pic.png';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex flex-col h-full w-full">
	<Header />
	<div class="flex-grow justify-center items-center flex max-w-screen-xl pb-24 mx-auto">
		<div class="flex justify-center items-end text-white mx-5">
			<div class="font-nino text-center md:text-left">
				<h1 class="text-4xl xl:text-5xl font-bold mx-2 lg:my-8 my-6 xl:my-12">ჩვენს შესახებ</h1>
				<p class="xl:text-[25px] tracking-wide lg:text-xl md:text-lg text-xl leading-tight">
					გამარჯობა! ჩვენი გამოცდილი IT ჯგუფის მიზანია დავეხმაროთ როგორც მსხვილ კომპანიებს, ასევე
					კერძო პირებს ტექნოლოგიური პრობლემების მოგვარებაში რომლებიც პირდაპირ აისახება თქვენი
					კომპანიის პროდუქტიულობაზე, რადგან დაზიანებული კომპიუტერული სისტემებით ხარისხიანი საქმის
					შესრულება შეუძლებელია. ჩვენ გთავაზობთ ტექნოლოგიური ხარვეზების ხარისხიანად მოგვარებას დროის
					უმოკლეს ინტერვალში პროფესიონალი გუნდის მიერ. #ითანამშრომლე ჩვენთან, იყავი მშვიდად
				</p>
			</div>
			<img
				src={pic}
				alt="About me server pic"
				class="xl:w-[500px] m-1 lg:w-[400px] w-[320px] hidden md:block"
			/>
		</div>
	</div>
</div>
