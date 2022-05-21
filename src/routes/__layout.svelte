<script>
	import Header from '../components/header.svelte';

	import '../app.css';
	import Sidebar from '../components/sidebar.svelte';
</script>

<head>
	<title>Dashboard</title>
</head>
<div class="bg-background min-h-screen font-open-sans flex flex-col">
	<Header />
	<div class="flex flex-row">
		<Sidebar />
		<slot />
	</div>
</div>
