<script lang="ts">
	import Bar from 'svelte-chartjs/src/Bar.svelte';

	const labels = ['Jan 12', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	let data = {
		labels: labels,
		datasets: [
			{
				label: 'Average Purchase Value',
				data: [26000, 22500, 20000, 21000, 23000, 25000, 24000],
				backgroundColor: 'rgba(255, 232, 84, 0.9)',
				type: 'line'
			},
			{
				label: 'Nett',
				data: [26000, 22500, 20000, 21000, 23000, 25000, 24000],
				backgroundColor: 'rgba(55, 176, 76, 0.9)'
			},
			{
				label: 'Gross',
				data: [1000, 1000, 1000, 1000, 1000, 1000, 1000],
				backgroundColor: 'rgba(40, 158, 69, 0.9)'
			},
			{
				label: 'Unit per Transaction',
				data: [5, 10, 12, 4, 6, 8, 10],
				backgroundColor: 'rgba(112, 112, 112, 0.9)',
				type: 'line'
			}
		]
	};
	let options = {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: 'bottom'
			}
		},
		scales: {
			x: {
				stacked: true
			},
			y: {
				stacked: true
			}
		}
	};
</script>

<template>
	<div class="flex flex-col bg-white rounded-md shadow-md w-[37rem] h-[444px] px-5 py-7">
		<div class="flex flex-row justify-between">
			<h3 class="mb-4 text-xl text-emphasis uppercase">Average Purchase Value</h3>
			<img src="img/kebab.png" alt="" class="h-5" />
		</div>

		<div class="my-auto">
			<Bar {data} {options} />
		</div>
	</div>
</template>
