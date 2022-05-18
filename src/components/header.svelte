<script lang="ts">
	export let username = 'Hoshimachi Suisei';
	export let company = 'Cover Corporation';
	export let userImage = 'img/Profile.svg';
</script>

<template>
	<div class="flex flex-row bg-white font-open-sans py-4 px-8 justify-between shadow-md z-10">
		<div class="flex flex-row" id="Logo Group">
			<img src="img/advotics-logo-optimize.jpg" alt="Logo Advotics" class="w-32 h-8" />
			<div class="flex flex-row mb-0 mt-auto">
				<span class="ml-2 mr-1 text-xs">powered by</span>
				<img src="img/advotics-logo-optimize.jpg" alt="Logo Advotics" class="w-auto h-4" />
			</div>
		</div>
		<div class="flex flex-row">
			<div class="flex flex-col text-center">
				<span class="text-sm">{username}</span>
				<span class="text-xs">{company}</span>
			</div>
			<img src={userImage} alt="Profile" class="w-8 h-8 my-auto mx-5" />
			<img src="img/logout.png" alt="Logout" class="w-[15px] h-[15px] my-auto" />
		</div>
	</div>
</template>
