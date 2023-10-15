<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Input from '$lib/components/contact/Input.svelte';
	import phone from '$lib/assets/contacts/phone.svg';
	import email from '$lib/assets/contacts/email.svg';
	import facebook from '$lib/assets/contacts/facebook.svg';
	import location from '$lib/assets/contacts/location.svg';
	import whatsapp from '$lib/assets/contacts/whatsapp.svg';
	import telegram from '$lib/assets/contacts/telegram.svg';
	import logo from '$lib/assets/Logo.png';

	const info = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
		accessKey: '83b3d53e-d4d4-47bd-b1b0-6b23f6abb95b'
	};
	let sent = false;
	let response = { success: false, message: '' };
	const emailFilter = '[^@\\s]+@[^@\\s]+\\.[^@\\s]+';
	const phoneFilter = '[0-9]{9}';
	const copyClick = async (event: Event) => {
		const target = event.target as HTMLButtonElement;
		if (!target.textContent) {
			return;
		}
		const res = await navigator.clipboard.writeText(target.textContent);
		alert('დაკოპირდა: ' + target.textContent);
	};
	const changeValue = (event: Event) => {
		const target = event.target as HTMLInputElement;
		return target.value.trim();
	};
	const handlePhoneNumberInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		let numericValue = target.value.replace(/\D/g, '');
		numericValue = numericValue.slice(0, 9);

		target.value = numericValue;
		return numericValue;
	};
	const handleFormSubmit = async (ev: Event) => {
		ev.preventDefault();
		const data = { name: `${info.firstName} ${info.lastName}`, ...info };
		console.log(data);
		try {
			const res = await fetch('https://api.staticforms.xyz/submit', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: { 'Content-Type': 'application/json' }
			});
			const js = await res.json();
			sent = true;
			response = js;
			setTimeout(() => {
				sent = false;
			}, 2000);
		} catch (error) {
			sent = true;
			response = { success: false, message: 'Something went wrong' };
			setTimeout(() => {
				sent = false;
			}, 2000);
		}
	};
</script>

<div class="flex flex-col h-full w-full">
	<Header />
	<div class="font-poppins flex flex-col flex-grow justify-center items-center md:mx-5">
		{#if sent}
			<h1 class="text-xl {response.success ? 'text-green-500' : 'text-red-700'}">
				{!response.success ? 'Error' : 'Success'}
			</h1>
			<p class="text-lg font-thin {response.success ? 'text-green-500/60' : 'text-red-700/50'}">
				{response.message}
			</p>
		{:else}
			<div class="flex w-full lg:w-9/12 xl:w-7/12">
				<div
					class="bg-[#000322] hidden md:flex w-[40%] my-10 text-white py-8 px-5 rounded-2xl flex-col justify-between"
				>
					<div class="flex flex-col text-center">
						<h1 class="text-xl font-semibold">Contact Information</h1>
					</div>
					<div class="flex flex-col gap-10">
						<div class="flex text-sm justify-left items-center gap-5">
							<img class="w-7" src={phone} alt="Phone Icon" />
							<button on:click={copyClick}>599 02 62 35</button>
						</div>
						<div class="flex text-sm justify-left items-center gap-5">
							<img class="w-7" src={email} alt="Email Icon" />
							<button on:click={copyClick}>itfixer6@gmail.com</button>
						</div>
						<div class="flex text-sm justify-left items-center gap-5">
							<img class="w-7" src={location} alt="Location Icon" />
							<button on:click={copyClick}>Tamar Mepe Avenue</button>
						</div>
					</div>
					<div class="flex flex-row w-full justify-between">
						<div class="flex flex-row justify-center items-center gap-3 [&>*]:h-7 xl:[&>*]:h-8">
							<a target="_blank" href="https://facebook.com">
								<img src={facebook} alt="facebook" />
							</a>
							<a target="_blank" href="https://wa.me/995599026235"
								><img src={whatsapp} alt="whatsapp" /></a
							>
							<a target="_blank" href="https://t.me/itfixer"
								><img src={telegram} alt="telegram" /></a
							>
						</div>
						<img src={logo} alt="Logo" class="h-7" />
					</div>
				</div>
				<form
					on:submit={handleFormSubmit}
					class="flex flex-col gap-y-16 justify-center items-center flex-grow px-5 mb-10 md:px-8 py-10"
				>
					<div
						class=" md:hidden flex gap-5 text-xs flex-col bg-[#000322] p-5 rounded-xl justify-start w-full text-white"
					>
						<div class="flex justify-left items-center gap-2">
							<img class="w-7" src={phone} alt="Phone Icon" />
							<button type="button" on:click={copyClick}>599 02 62 35</button>
						</div>
						<div class="flex justify-left items-center gap-2">
							<img class="w-7" src={email} alt="Email Icon" />
							<button type="button" on:click={copyClick}>itfixer6@gmail.com</button>
						</div>
						<div class="flex justify-left items-center gap-2">
							<img class="w-7" src={location} alt="Location Icon" />
							<button type="button" on:click={copyClick}>Tamar Mepe Avenue</button>
						</div>
					</div>
					<div class="flex gap-5 flex-shrink w-full">
						<Input
							name="First Name"
							placeholder="John"
							input={(ev) => {
								info.firstName = changeValue(ev);
							}}
						/>
						<Input
							name="Last Name"
							placeholder="Doe"
							input={(ev) => {
								info.lastName = changeValue(ev);
							}}
						/>
					</div>
					<div class="flex gap-5 w-full">
						<Input
							name="Email"
							type="email"
							placeholder="JohnDoe@example.com"
							pattern={emailFilter}
							input={(ev) => {
								info.email = changeValue(ev);
							}}
						/>
						<Input
							name="Phone Number"
							type="tel"
							placeholder="599123456"
							pattern={phoneFilter}
							input={(ev) => {
								info.phone = handlePhoneNumberInput(ev);
							}}
						/>
					</div>
					<div class="w-full">
						<Input
							name="Message"
							type="text"
							placeholder="Write your message"
							input={(ev) => {
								info.message = changeValue(ev);
							}}
						/>
					</div>
					<div class="flex w-full justify-between md:justify-end">
						<div
							class="flex flex-row md:hidden justify-center items-center gap-3 [&>*]:h-7 sm:[&>*]:h-9"
						>
							<a target="_blank" href="https://facebook.com">
								<img src={facebook} alt="facebook" />
							</a>
							<a target="_blank" href="https://wa.me/995599026235"
								><img src={whatsapp} alt="whatsapp" /></a
							>
							<a target="_blank" href="https://t.me/itfixer"
								><img src={telegram} alt="telegram" /></a
							>
						</div>
						<button
							type="submit"
							class="bg-gradient-to-b from-[#094387] to-[#0E6DDC] transition-all hover:scale-105 text-white rounded-md px-6 text-[2.5vw] sm:text-base sm:px-8 py-3"
							>Send Message</button
						>
					</div>
				</form>
			</div>
		{/if}
	</div>
</div>
