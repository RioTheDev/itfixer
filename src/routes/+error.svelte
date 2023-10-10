<script>
	import { page } from '$app/stores';
</script>

<div class="w-full h-screen flex justify-center items-center">
	<div
		class="px-16 rounded-md space-y-2 font-nino py-10 bg-neutral-900 flex justify-center items-center flex-col"
	>
		<p class="text-3xl text-nBlue">დაფიქსირდა შეცდომა!</p>
		<p class="text-xl text-white">ეს გვერდი ვერ მოიძებნა</p>
		<p class="text-neutral-300">{$page.status}</p>
	</div>
</div>
