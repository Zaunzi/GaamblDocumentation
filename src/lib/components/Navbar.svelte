<script lang="ts">
	import { onMount } from 'svelte';
	import IconSearch from '@lucide/svelte/icons/search';
	import IconMenu from '@lucide/svelte/icons/menu';
	import IconX from '@lucide/svelte/icons/x';
	import IconPlay from '@lucide/svelte/icons/play';
	import SearchModal from './SearchModal.svelte';

	let isMobileMenuOpen = false;
	let isSearchOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function openSearch() {
		isSearchOpen = true;
	}

	function closeSearch() {
		isSearchOpen = false;
	}

	// Close mobile menu when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const target = event.target as HTMLElement;
		if (!target.closest('.mobile-menu')) {
			isMobileMenuOpen = false;
		}
	}

	// Keyboard shortcuts
	function handleKeydown(event: KeyboardEvent) {
		// Ctrl/Cmd + K to open search
		if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
			event.preventDefault();
			openSearch();
		}
		// Escape to close search
		if (event.key === 'Escape' && isSearchOpen) {
			closeSearch();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<nav class="navbar bg-surface-50 dark:bg-surface-900 shadow-sm border-b border-surface-200 dark:border-surface-700">
	<div class="container mx-auto px-2 md:px-4">
		<div class="flex items-center justify-between h-16">
			<!-- Logo Section -->
			<div class="flex items-center">
				<a href="/" class="flex items-center space-x-3">
					<img src="/gaambl_logo.png" alt="Gaambl Logo" class="h-10 w-auto hidden md:block" />
					<span class="text-xl font-bold text-surface-900 dark:text-surface-100 md:hidden">Gaambl</span>
				</a>
			</div>

			<!-- Search Bar -->
			<div class="flex-1 max-w-md mx-4 hidden md:block">
				<button
					on:click={openSearch}
					class="w-full flex items-center gap-3 px-4 py-2 border border-surface-300 dark:border-surface-600 rounded-lg bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400 hover:bg-surface-300 dark:hover:bg-surface-600 hover:text-surface-700 dark:hover:text-surface-300 transition-colors"
				>
					<IconSearch size="20" />
					<span class="flex-1 text-left">Search documentation...</span>
					<span class="text-xs bg-surface-400 dark:bg-surface-600 text-surface-100 px-2 py-1 rounded">⌘K</span>
				</button>
			</div>

			<!-- Right Section: Play Button and Mobile Menu -->
			<div class="flex items-center space-x-2 md:space-x-4">
				<!-- Play Button -->
				<a
					href="https://app.gaambl.fun/l"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-sm bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border-0"
					title="Play Gaambl"
				>
					<IconPlay size="16" />
					<span class="hidden sm:inline">Play</span>
				</a>

				<!-- Mobile Search Button -->
				<button
					on:click={openSearch}
					class="md:hidden p-2 text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100"
					title="Search"
				>
					<IconSearch size="20" />
				</button>

				<!-- Mobile Menu Button -->
				<button
					on:click={toggleMobileMenu}
					class="md:hidden p-2 text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-100"
					title="Menu"
				>
					{#if isMobileMenuOpen}
						<IconX size="20" />
					{:else}
						<IconMenu size="20" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if isMobileMenuOpen}
			<div class="md:hidden pb-4 mobile-menu">
				<div class="space-y-2">
					<a
						href="https://app.gaambl.fun/l"
						target="_blank"
						rel="noopener noreferrer"
						class="w-full flex items-center gap-3 px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-lg bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 transition-colors shadow-lg"
					>
						<IconPlay size="20" />
						<span>Play Gaambl</span>
					</a>
					<button
						on:click={openSearch}
						class="w-full flex items-center gap-3 px-4 py-3 border border-surface-300 dark:border-surface-600 rounded-lg bg-surface-200 dark:bg-surface-700 text-surface-500 dark:text-surface-400 hover:bg-surface-300 dark:hover:bg-surface-600 transition-colors"
					>
						<IconSearch size="20" />
						<span>Search documentation...</span>
					</button>
				</div>
			</div>
		{/if}
	</div>
</nav>

<!-- Search Modal -->
<SearchModal bind:isOpen={isSearchOpen} onClose={closeSearch} />

<style>
	/* Custom styles for the navbar */
	.navbar {
		position: sticky;
		top: 0;
		z-index: 50;
		backdrop-filter: blur(8px);
	}

	/* Smooth transitions */
	.navbar button {
		transition: all 0.2s ease-in-out;
	}
</style>
