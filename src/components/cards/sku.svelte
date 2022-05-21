<script lang="ts">
	export let name = 'Amelia Watson, Number One Detective!';
	export let price = 812000;
	export let quantity = 20973;
    export let image = "https://is3.cloudhost.id/francis/public/advotics/ame.png"

	const formatter = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	});

	const formattedPrice = formatter.format(price);
</script>

<template>
	<div class="flex flex-row w-60 rounded-md shadow-md bg-white h-16 pr-6 cursor-default">
		<img
			src={image}
			alt=""
			class="w-14 h-16 object-cover rounded-l-md"
		/>
		<div class="flex flex-col w-[9rem] my-auto ml-2">
			<span class="text-ellipsis overflow-hidden w-full whitespace-nowrap cursor-help" title={name}>{name}</span>
			<div class="flex flex-row text-lighter-emphasis justify-between w-full text-xs">
				<span>{formattedPrice}</span>
				<span>{quantity}</span>
			</div>
		</div>
	</div>
</template>
