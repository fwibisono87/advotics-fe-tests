<script lang="ts">
	import SveltyPicker from 'svelty-picker';
	import ClickOutside from 'svelte-click-outside';

	export let startDate = '12 September 2018';
	export let endDate = '14 September 2018';

	const calendarColors = 'calendar-colors';
	const today = Date.now();
	const yesterday = new Date(today - 86400000);
	const formatter = new Intl.DateTimeFormat('en-GB', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	let activeSelector = {
		yesterday: true,
		sevenDays: false,
		lastThirtyDays: false,
		lastMonth: false,
		custom: false
	};
	let expanded = false;
    let trigger;

	function toggleExpand() {
		expanded = !expanded;
	}
    function close(){
        expanded = false
    }
	function setActiveSelector(selector: string) {
		let key: keyof typeof activeSelector;
		for (key in activeSelector) {
			if (key === selector) {
				activeSelector[key] = true;
			} else {
				activeSelector[key] = false;
			}
		}
	}
	function selectYesterday() {
		startDate = formatter.format(yesterday);
		endDate = formatter.format(yesterday);
		setActiveSelector('yesterday');
	}
	function select7Days() {
		startDate = formatter.format(new Date(today - 691200000));
		endDate = formatter.format(yesterday);
		setActiveSelector('sevenDays');
	}
	function select30Days() {
		startDate = formatter.format(new Date(today - 2678400000));
		endDate = formatter.format(yesterday);
		setActiveSelector('lastThirtyDays');
	}
	function getFirstDayPreviousMonth() {
		const date = new Date();
		return new Date(date.getFullYear(), date.getMonth() - 1, 1);
	}
	function getLastDayPreviousMonth() {
		const date = new Date();
		return new Date(date.getFullYear(), date.getMonth(), 0);
	}
	function selectLastMonth() {
		startDate = formatter.format(getFirstDayPreviousMonth());
		endDate = formatter.format(getLastDayPreviousMonth());
		setActiveSelector('lastMonth');
	}
	function selectCustom() {
		setActiveSelector('custom');
	}

	$: todayFormatted = formatter.format(today);
	selectYesterday();
</script>

<template>
	<div class="relative inline-block">
		<div
        bind:this={trigger}
			class="flex flex-row bg-white rounded-sm shadow-md py-3.5 px-4 h-min my-auto cursor-pointer"
			on:click={toggleExpand}
		>
			<img src="img/calendar.png" class="w-5 h-5 mr-4 my-auto" alt="" />
			<span class="text-even-lighter-emphasis"> Period </span>
			<span class="ml-6 mr-4">{startDate} - {endDate}</span>
			<img
				src="img/chevron-up.png"
				class="w-6 rotate-180"
				style="filter: invert(100%);"
				alt="Expand Date Picker"
			/>
		</div>
		{#if expanded}
			<ClickOutside on:clickoutside={close} exclude={[trigger]}>
				<div
					class="bg-white z-10 absolute right-0 top-0 w-fit-content p-6 shadow-md rounded-sm flex flex-col"
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
					<div class="flex flex-row">
						<div class="flex flex-col">
							<span
								class="rangeSelector"
								class:rangeSelectorActive={activeSelector.yesterday}
								on:click={selectYesterday}>Yesterday</span
							>
							<span
								class="rangeSelector"
								class:rangeSelectorActive={activeSelector.sevenDays}
								on:click={select7Days}>Last 7 Days</span
							>
							<span
								class="rangeSelector"
								class:rangeSelectorActive={activeSelector.lastThirtyDays}
								on:click={select30Days}>Last 30 days</span
							>
							<span
								class="rangeSelector"
								class:rangeSelectorActive={activeSelector.lastMonth}
								on:click={selectLastMonth}>Last Month</span
							>
							<span
								class="rangeSelector"
								class:rangeSelectorActive={activeSelector.custom}
								on:click={selectCustom}>Custom</span
							>
						</div>
						<div class="flex flex-col">
							<div class="flex flex-row gap-6">
								<SveltyPicker
									pickerOnly={true}
									bind:value={startDate}
									format="dd MM yyyy"
									clearToggle={false}
									theme={calendarColors}
									todayBtn={false}
									clearBtn={false}
									{endDate}
									on:change={selectCustom}
								/>
								<SveltyPicker
									pickerOnly={true}
									bind:value={endDate}
									format="dd MM yyyy"
									clearToggle={false}
									theme={calendarColors}
									todayBtn={false}
									clearBtn={false}
									{startDate}
									endDate={todayFormatted}
									on:change={selectCustom}
								/>
							</div>
							<span class="text-center">Rentang waktu yang dipilih:</span>
							<span class="text-center">{startDate} - {endDate}</span>
						</div>
					</div>
				</div>
			</ClickOutside>
		{/if}
	</div>
</template>

<style>
	:global(.calendar-colors) {
		--sdt-primary: #d6edda;
		--sdt-color: rgb(0, 0, 0);
		--sdt-color-selected: #31a245;
		--sdt-bg-main: rgb(255, 255, 255);
		--sdt-bg-today: var(--sdt-primary);
		--sdt-bg-clear: #dc3545;
		--sdt-today-bg: rgb(160, 145, 57);
		--sdt-today-color: var(--sdt-color-selected);
		--sdt-clear-color: #dc3545;
		--sdt-btn-bg-hover: #d6edda;
		--sdt-btn-header-bg-hover: rgb(156, 248, 168);
		--sdt-clock-bg: #eeeded;
		--sdt-clock-bg-minute: #eeeded;
		--sdt-clock-bg-shadow: 0 0 128px 2px #74661834 inset;
		--sdt-shadow: rgb(255, 255, 255);
	}
	.rangeSelector {
		@apply w-36;
		@apply border-y;
		@apply border-collapse;
		@apply py-4;
		@apply cursor-pointer;
	}
	.rangeSelectorActive {
		@apply text-green-700;
		@apply font-bold;
		@apply cursor-default;
	}
</style>
