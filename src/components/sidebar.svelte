<script lang="ts">
</script>

<template>
	<div class="flex flex-col w-[4.5rem] bg-white sidebarHeight shadow-lg top-0">
		<img src="img/Halfburger.svg" alt="Menu" class="min-w-5 max-w-6 mx-6 my-6" />
		<div class="w-full h-12 bg-select flex">
			<img
				src="img/dashboard.png"
				alt="Dashboard"
				class="bg-white rounded-md p-[2px] w-6 h-6 mx-auto my-auto"
			/>
		</div>
	</div>
</template>

<style>
	.menuColor {
		filter: invert(100%) sepia(0%) saturate(6331%) hue-rotate(52deg) brightness(81%) contrast(88%);
	}
	.sidebarHeight {
		height: calc(100vh - 4.25rem);
	}
</style>
