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
	<div
		class="flex flex-col bg-white rounded-sm shadow-sm py-4 pl-4 pr-5 font-source-sans w-72 justify-between my-4"
	>
		<h3 class="text-[#43425D] opacity-50">Sales Turnover</h3>
		<div class="flex flex-row justify-between">
			<div class="flex flex-col">
				<span class="text-emphasis font-bold text-2xl">{formattedValue}</span>
				<div class="flex flex-row">
					<img src="img/DownArrow.svg" alt="" class="h-3 my-auto" />
					<span class="text-xs text-red-600 mr-1"> 13.8%</span>
					<span class="text-lighter-emphasis text-xs">last period in products sold</span>
				</div>
			</div>

			<img src="img/Sales Turnover.svg" alt="Sales Turnover" class="w-8 h-8 my-auto ml-2" />
		</div>
	</div>
</template>
