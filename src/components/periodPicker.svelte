<script lang="ts">
	import { Datepicker } from 'svelte-calendar';

	export let startDate = '12 September 2018';
	export let endDate = '14 September 2018';

	const formatter = new Intl.DateTimeFormat('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	let expanded = false;

	function toggleExpand() {
		expanded = !expanded;
	}

	$: startDateFormatted = formatter.format(new Date(startDate));
	$: endDateFormatted = formatter.format(new Date(endDate));
</script>

<template>
	<div class="relative inline-block">
		<div
			class="flex flex-row bg-white rounded-sm shadow-md py-3.5 px-4 h-min my-auto cursor-pointer"
			on:click={toggleExpand}
		>
			<img src="img/calendar.png" class="w-5 h-5 mr-4 my-auto" alt="" />
			<span class="text-even-lighter-emphasis"> Period </span>
			<span class="ml-6 mr-4">{startDateFormatted} - {endDateFormatted}</span>
			<img
				src="img/chevron-up.png"
				class="w-6 rotate-180"
				style="filter: invert(100%);"
				alt="Expand Date Picker"
			/>
		</div>
		{#if expanded}
			<div
				class="bg-white z-10 absolute right-0 top-0 w-[75vw] p-6 shadow-md rounded-sm flex flex-col"
			>
				<div class="flex flex-row w-full justify-between mb-4">
					<div class="flex flex-row">
						<img src="img/calendar.png" class="w-5 h-5 mr-4 my-auto" alt="" />
						<span class="my-auto"> Period </span>
					</div>

					<img
						src="img/close.png"
						class="w-6 rotate-180 cursor-pointer"
						alt="Expand Date Picker"
						on:click={toggleExpand}
					/>
				</div>
				<p>
					Glasses are really versatile. First, you can have glasses-wearing girls take them off and
					suddenly become beautiful, or have girls wearing glasses flashing those cute grins, or
					have girls stealing the protagonist's glasses and putting them on like, "Haha, got your
					glasses!" That's just way too cute! Also, boys with glasses! I really like when their
					glasses have that suspicious looking gleam, and it's amazing how it can look really cool
					or just be a joke. I really like how it can fulfill all those abstract needs. Being able
					to switch up the styles and colors of glasses based on your mood is a lot of fun too! It's
					actually so much fun! You have those half rim glasses, or the thick frame glasses,
					everything! It's like you're enjoying all these kinds of glasses at a buffet. I really
					want Luna to try some on or Marine to try some on to replace her eyepatch. We really need
					glasses to become a thing in hololive and start selling them for HoloComi. Don't. You.
					Think. We. Really. Need. To. Officially. Give. Everyone. Glasses?
				</p>
			</div>
		{/if}
	</div>
</template>
