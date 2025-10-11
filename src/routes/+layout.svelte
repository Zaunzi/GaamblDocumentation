<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import Navbar from '$lib/components/Navbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let { children } = $props();

	// Initialize theme on layout load
	if (browser) {
		const mode = localStorage.getItem('mode') || 'dark';
		document.documentElement.setAttribute('data-mode', mode);
	}
</script>

<svelte:head>
	<link rel="icon" href="/gaambl-icon-square.png" />
	<title>Gaambl Documentation</title>
	<meta name="description" content="Complete documentation for the Gaambl decentralized gaming platform" />
</svelte:head>

<div class="min-h-screen bg-surface-100 dark:bg-surface-800">
	<Navbar />
	
	<div class="flex h-[calc(100vh-4rem)]">
		<Sidebar />
		
		<main class="flex-1 overflow-y-auto">
			<div class="container mx-auto px-4 py-8">
				{@render children?.()}
			</div>
		</main>
	</div>
</div>
