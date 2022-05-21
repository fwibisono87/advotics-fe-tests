<script lang="ts">
	import Accordeon from '../components/accordeon.svelte';
	import PeriodPicker from '../components/periodPicker.svelte';

	let mode = 'yesterday';
</script>

<template>
	<div class="flex flex-col ml-6 mr-8 w-full">
		<div class="flex flex-row justify-between my-8">
			<h1 class="text-heading text-[2.5rem]">Dashboard</h1>
			<PeriodPicker bind:mode />
		</div>
		<Accordeon {mode} />
	</div>
</template>
