<script lang="ts">
	export let value = 3600000;

	const formatter = new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0
	});

	export let formattedValue = formatter.format(value);
</script>

<template>
	<div class="flex flex-col bg-white rounded-sm shadow-sm w-min py-4 pl-4 pr-5 font-source-sans">
		<h3 class="text-light-emphasis">Sales Turnover</h3>
		<span class="text-emphasis font-bold text-2xl">{formattedValue}</span>
	</div>
</template>
