<script lang="ts">
	import SkuList from './cards/skuList.svelte';
	import Turnover from './cards/turnover.svelte';

	let visibility = true;

	function toggleVisibility() {
		visibility = !visibility;
	}
</script>

<template>
	<div class="flex flex-row bg-highlight w-full py-3 pl-4 justify-between">
		<h2 class="uppercase text-white text-source-sans font-semibold text-xl my-auto">
			Market Insights
		</h2>
		<div class="flex flex-row">
			<img src="img/help.png" alt="Help" class="w-5 h-5 my-auto" />
			<span class="underline my-auto text-white text-sm mt-auto">Click Here for Help</span>
			<img
				src="img/chevron-up.png"
				alt="Switch Arrow"
				class:rotate-180={!visibility}
				on:click={toggleVisibility}
				class="w-[2.25em]"
			/>
		</div>
	</div>
	{#if visibility}
		<div class="flex flex-col gap-1">
			<Turnover />
			<div class="flex flex-row">
				<SkuList />
			</div>
		</div>
	{/if}
</template>
