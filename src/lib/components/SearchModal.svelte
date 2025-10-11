<script lang="ts">
  import { goto } from '$app/navigation';
  import { searchDocs, getSearchSuggestions, type SearchResult } from '$lib/search';
  import IconSearch from '@lucide/svelte/icons/search';
  import IconX from '@lucide/svelte/icons/x';
  import IconArrowRight from '@lucide/svelte/icons/arrow-right';
  import IconFileText from '@lucide/svelte/icons/file-text';

  export let isOpen: boolean = false;
  export let onClose: () => void;

  let searchQuery = '';
  let searchResults: SearchResult[] = [];
  let suggestions: string[] = [];
  let selectedIndex = -1;
  let searchInput: HTMLInputElement;

  // Reactive search
  $: if (searchQuery.trim()) {
    searchResults = searchDocs(searchQuery);
    suggestions = getSearchSuggestions(searchQuery);
  } else {
    searchResults = [];
    suggestions = [];
  }

  function handleSearch() {
    if (searchQuery.trim()) {
      searchResults = searchDocs(searchQuery);
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    const totalItems = searchResults.length + suggestions.length;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, totalItems - 1);
        break;
      case 'ArrowUp':
        event.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        break;
      case 'Enter':
        event.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
          // Navigate to search result
          goto(searchResults[selectedIndex].href);
          onClose();
        } else if (selectedIndex >= searchResults.length && selectedIndex < totalItems) {
          // Use suggestion
          const suggestionIndex = selectedIndex - searchResults.length;
          searchQuery = suggestions[suggestionIndex];
          searchInput.focus();
        }
        break;
      case 'Escape':
        onClose();
        break;
    }
  }

  function selectResult(result: SearchResult) {
    goto(result.href);
    onClose();
  }

  function selectSuggestion(suggestion: string) {
    searchQuery = suggestion;
    searchInput.focus();
  }

  function clearSearch() {
    searchQuery = '';
    searchResults = [];
    suggestions = [];
    selectedIndex = -1;
    searchInput.focus();
  }

  // Focus input when modal opens
  $: if (isOpen && searchInput) {
    setTimeout(() => searchInput.focus(), 100);
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 pt-20">
    <div class="bg-surface-50 dark:bg-surface-900 rounded-lg shadow-2xl w-full max-w-2xl border border-surface-200 dark:border-surface-700">
      <!-- Search Input -->
      <div class="p-4 border-b border-surface-200 dark:border-surface-700">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <IconSearch size="20" class="text-surface-400" />
          </div>
          <input
            bind:this={searchInput}
            bind:value={searchQuery}
            on:keydown={handleKeydown}
            on:input={handleSearch}
            placeholder="Search documentation..."
            class="block w-full pl-10 pr-10 py-3 border border-surface-300 dark:border-surface-600 rounded-lg bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-surface-100 placeholder-surface-500 dark:placeholder-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {#if searchQuery}
            <button
              on:click={clearSearch}
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-surface-400 hover:text-surface-600 dark:hover:text-surface-300"
            >
              <IconX size="16" />
            </button>
          {/if}
        </div>
      </div>

      <!-- Search Results -->
      <div class="max-h-96 overflow-y-auto">
        {#if searchQuery.trim()}
          {#if searchResults.length > 0}
            <!-- Search Results -->
            <div class="p-2">
              {#each searchResults as result, index}
                <button
                  on:click={() => selectResult(result)}
                  class="w-full text-left p-3 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors {
                    selectedIndex === index ? 'bg-surface-100 dark:bg-surface-800' : ''
                  }"
                >
                  <div class="flex items-start gap-3">
                    <IconFileText size="16" class="text-surface-400 mt-1 flex-shrink-0" />
                    <div class="flex-1 min-w-0">
                      <div class="font-semibold text-surface-900 dark:text-surface-100 truncate">
                        {result.title}
                      </div>
                      <div class="text-sm text-surface-600 dark:text-surface-400 truncate">
                        {result.description}
                      </div>
                      <div class="text-xs text-surface-500 dark:text-surface-500 mt-1">
                        {result.section} • {result.href}
                      </div>
                    </div>
                    <IconArrowRight size="16" class="text-surface-400 flex-shrink-0" />
                  </div>
                </button>
              {/each}
            </div>
          {:else}
            <!-- No Results -->
            <div class="p-8 text-center text-surface-500 dark:text-surface-400">
              <IconSearch size="48" class="mx-auto mb-4 opacity-50" />
              <p class="text-lg font-medium mb-2">No results found</p>
              <p class="text-sm">Try searching for different keywords</p>
            </div>
          {/if}

          <!-- Suggestions -->
          {#if suggestions.length > 0}
            <div class="border-t border-surface-200 dark:border-surface-700 p-2">
              <div class="text-xs text-surface-500 dark:text-surface-500 px-3 py-2 font-medium">
                Suggestions
              </div>
              {#each suggestions as suggestion, index}
                {@const suggestionIndex = searchResults.length + index}
                <button
                  on:click={() => selectSuggestion(suggestion)}
                  class="w-full text-left p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors {
                    selectedIndex === suggestionIndex ? 'bg-surface-100 dark:bg-surface-800' : ''
                  }"
                >
                  <div class="flex items-center gap-2">
                    <IconSearch size="14" class="text-surface-400" />
                    <span class="text-sm text-surface-600 dark:text-surface-400">{suggestion}</span>
                  </div>
                </button>
              {/each}
            </div>
          {/if}
        {:else}
          <!-- Empty State -->
          <div class="p-8 text-center text-surface-500 dark:text-surface-400">
            <IconSearch size="48" class="mx-auto mb-4 opacity-50" />
            <p class="text-lg font-medium mb-2">Search Documentation</p>
            <p class="text-sm">Type to search through all documentation pages</p>
          </div>
        {/if}
      </div>

      <!-- Footer -->
      <div class="p-3 border-t border-surface-200 dark:border-surface-700 bg-surface-100 dark:bg-surface-800 rounded-b-lg">
        <div class="flex items-center justify-between text-xs text-surface-500 dark:text-surface-500">
          <div class="flex items-center gap-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Custom scrollbar */
  .max-h-96::-webkit-scrollbar {
    width: 6px;
  }
  
  .max-h-96::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .max-h-96::-webkit-scrollbar-thumb {
    background-color: rgb(var(--color-surface-300));
    border-radius: 3px;
  }
  
  .max-h-96::-webkit-scrollbar-thumb:hover {
    background-color: rgb(var(--color-surface-400));
  }
</style>
