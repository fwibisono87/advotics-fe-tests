<script lang="ts">
	import Sku from './sku.svelte';
	import SkuHighlight from './skuHighlight.svelte';
	import type { ISku } from '../../lib/dummyData.types';

	export let title = 'Best Selling SKU';
	export let skuList: ISku[] = [
		{
			image: 'https://is3.cloudhost.id/francis/public/advotics/ame.png',
			name: 'Amelia Watson, Number One Detective!',
			price: 812020,
			quantity: 20971
		},
		{
			image: 'https://is3.cloudhost.id/francis/public/advotics/ame.png',
			name: 'Amelia Casualson, Number One Detective!',
			price: 812020,
			quantity: 20971
		},
		{
			image: 'https://is3.cloudhost.id/francis/public/advotics/ame.png',
			name: 'Amelia Beeson, Number One Detective!',
			price: 812020,
			quantity: 20971
		},
		{
			image: 'https://is3.cloudhost.id/francis/public/advotics/ame.png',
			name: 'Amelia Buffson, Number One Detective!',
			price: 812020,
			quantity: 20971
		},
		{
			image: 'https://is3.cloudhost.id/francis/public/advotics/ame.png',
			name: 'Smol Ame, Number One Detective!',
			price: 812020,
			quantity: 20971
		}
	];

	$: highlight = skuList[0];
	$: other = skuList.slice(1);
</script>

<template>
	<div class="flex flex-col bg-white rounded-md shadow-md p-4">
		<div class="flex flex-row justify-between">
			<h3 class="mb-4 text-xl text-emphasis">
				{title}
			</h3>
			<img src="img/kebab.png" alt="" class="h-5" />
		</div>

		<div class="flex flex-col gap-2">
			<SkuHighlight
				image={highlight.image}
				name={highlight.name}
				price={highlight.price}
				quantity={highlight.quantity}
			/>
			{#each other as sku}
				<Sku image={sku.image} name={sku.name} price={sku.price} quantity={sku.quantity} />
			{/each}
		</div>
	</div>
</template>
