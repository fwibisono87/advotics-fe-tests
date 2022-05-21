<script lang="ts">
	import SkuList from './cards/skuList.svelte';
	import Turnover from './cards/turnover.svelte';

	import { ourProducts } from '$lib/dummyData';
	import Chart from './cards/chart.svelte';

	let visibility = true;
	export let mode = 'yesterday';

	function toggleVisibility() {
		visibility = !visibility;
	}
	//@ts-ignore
	let ourArray = [];
	let theirArray = [];
	$: {
		if (mode === 'yesterday') {
			ourArray = ourProducts.yesterday;
		} else if (mode === 'sevenDays') {
			ourArray = ourProducts.last7Days;
		} else if (mode === 'lastThirtyDays') {
			ourArray = ourProducts.last30Days;
		} else if (mode === 'lastMonth') {
			ourArray = ourProducts.lastMonth;
		} else if (mode === 'custom') {
			ourArray = ourProducts.custom;
		}
	}
	console.log(ourProducts);
</script>

<template>
	<div class="flex flex-row bg-highlight w-full py-3 pl-4 justify-between">
		<h2 class="uppercase text-white text-source-sans font-semibold text-xl my-auto">
			Market Insights
		</h2>
		<div class="flex flex-row">
			<img src="img/help.png" alt="Help" class="w-5 h-5 my-auto" />
			<a
				class="underline my-auto text-white text-sm mt-auto"
				href="https://www.advotics.com/en/contact-us/"
				target="_blank">Click Here for Help</a
			>
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
		<div class="flex flex-col gap-1 w-max">
			<Turnover />
			<div class="flex flex-row gap-4 w-max">
				<div class="w-max">
					<Chart />
				</div>
				<SkuList title="Best Selling SKU" skuList={ourArray} />
				<SkuList title="Top Competitor SKU" />
			</div>
		</div>
	{/if}
</template>
