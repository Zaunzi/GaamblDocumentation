<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import LightSwitch from './LightSwitch.svelte';
  
  import IconHome from '@lucide/svelte/icons/home';
  import IconDice1 from '@lucide/svelte/icons/dice-1';
  import IconTicket from '@lucide/svelte/icons/ticket';
  import IconMapPin from '@lucide/svelte/icons/map-pin';
  import IconBook from '@lucide/svelte/icons/book';
  import IconCode from '@lucide/svelte/icons/code';
  import IconShield from '@lucide/svelte/icons/shield';
  import IconTrendingUp from '@lucide/svelte/icons/trending-up';
  import IconUsers from '@lucide/svelte/icons/users';
  import IconChevronLeft from '@lucide/svelte/icons/chevron-left';
  import IconChevronRight from '@lucide/svelte/icons/chevron-right';
  import IconChevronDown from '@lucide/svelte/icons/chevron-down';
  import IconChevronUp from '@lucide/svelte/icons/chevron-up';
  import IconTwitter from '@lucide/svelte/icons/twitter';
  import IconMessageCircle from '@lucide/svelte/icons/message-circle';
  import IconExternalLink from '@lucide/svelte/icons/external-link';
  
  // Get current route
  $: currentRoute = $page.url.pathname;
  
  // Reactive active route checker
  $: activeRoute = (href: string) => {
    return href === '/' ? currentRoute === '/' : currentRoute.startsWith(href);
  };
  
  // Collapse state with localStorage persistence
  let isCollapsed = true;
  let expandedSections: { [key: string]: boolean } = { introduction: true };
  
  // Load saved state on mount
  onMount(() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    if (saved !== null) {
      isCollapsed = JSON.parse(saved);
    }
    
    const savedExpanded = localStorage.getItem('sidebar-expanded-sections');
    if (savedExpanded !== null) {
      expandedSections = JSON.parse(savedExpanded);
    }
  });
  
  // Save state when it changes
  $: if (typeof localStorage !== 'undefined') {
    localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed));
    localStorage.setItem('sidebar-expanded-sections', JSON.stringify(expandedSections));
  }
  
  // Navigation structure
  const navigationSections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: IconHome,
      items: [
        { href: '/', label: 'Overview', description: 'Platform overview' },
        { href: '/getting-started', label: 'Getting Started', description: 'Quick start guide' },
        { href: '/contract-addresses', label: 'Contract Addresses', description: 'Deployed contracts' }
      ]
    },
    {
      id: 'lotto',
      title: 'Gaambl Lotto',
      icon: IconDice1,
      items: [
        { href: '/lotto/overview', label: 'Overview', description: 'How lotto works' },
        { href: '/lotto/game-modes', label: 'Game Modes', description: 'Risk levels explained' },
        { href: '/lotto/game-states', label: 'Game States', description: 'State management' },
        { href: '/lotto/creating-games', label: 'Creating Games', description: 'Game creation guide' },
        { href: '/lotto/joining-games', label: 'Joining Games', description: 'How to participate' },
        { href: '/lotto/prize-distribution', label: 'Prize Distribution', description: 'Winner selection' },
        { href: '/lotto/monitoring', label: 'Monitoring', description: 'Bot operations' }
      ]
    },
    {
      id: 'raffle',
      title: 'Gaambl Raafl',
      icon: IconTicket,
      items: [
        { href: '/raffle/overview', label: 'Overview', description: 'How raffles work' },
        { href: '/raffle/raffle-states', label: 'Raffle States', description: 'State management' },
        { href: '/raffle/creating-raffles', label: 'Creating Raffles', description: 'NFT raffle guide' },
        { href: '/raffle/joining-raffles', label: 'Joining Raffles', description: 'How to participate' },
        { href: '/raffle/nft-integration', label: 'NFT Integration', description: 'Supported NFTs' }
      ]
    }
  ];

  const socialLinks = [
    { href: 'https://twitter.com/GaamblDotFun', label: 'Twitter', icon: IconTwitter, external: true },
    { href: 'https://discord.gg/2avk6gyE82', label: 'Discord', icon: IconMessageCircle, external: true },
    { href: 'https://docs.gaambl.fun/', label: 'Docs', icon: IconBook, external: false }
  ];
  
  function isActiveRoute(href: string): boolean {
    return href === '/' ? currentRoute === '/' : currentRoute.startsWith(href);
  }
  
  function toggleSection(sectionId: string) {
    expandedSections = { ...expandedSections, [sectionId]: !expandedSections[sectionId] };
  }
  
  function navigateToSection(sectionId: string) {
    const section = navigationSections.find(s => s.id === sectionId);
    if (section && section.items.length > 0) {
      // Navigate to the first item in the section
      goto(section.items[0].href);
    }
  }
  
  function isSectionExpanded(sectionId: string): boolean {
    return expandedSections[sectionId] || false;
  }
</script>

<!-- Sidebar Rail -->
<div class="bg-surface-50 dark:bg-surface-900 h-full border-r border-surface-200-800 flex flex-col shadow-lg transition-all duration-300 {isCollapsed ? 'w-20' : 'w-64'}">
  <!-- Main Navigation -->
  <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
    {#each navigationSections as section}
      <div class="space-y-1">
        <!-- Section Header -->
        <div class="group flex items-center p-3 rounded-lg transition-all duration-200 w-full {
          isCollapsed ? 'justify-center' : 'justify-start'
        } text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100">
          <!-- Icon and Title (clickable for navigation) -->
          <button
            on:click={() => navigateToSection(section.id)}
            class="flex items-center flex-1 {
              isCollapsed ? 'justify-center' : 'justify-start'
            }"
            title={section.title}
          >
            <svelte:component 
              this={section.icon} 
              size="20" 
              class="flex-shrink-0" 
            />
            {#if !isCollapsed}
              <div class="ml-3 text-left">
                <div class="font-medium">{section.title}</div>
              </div>
            {/if}
          </button>
          
          <!-- Chevron (clickable for expansion) -->
          {#if !isCollapsed}
            <button
              on:click={() => toggleSection(section.id)}
              class="ml-2 p-1 rounded hover:bg-surface-200 dark:hover:bg-surface-700"
              title={isSectionExpanded(section.id) ? 'Collapse section' : 'Expand section'}
            >
              <svelte:component 
                this={(expandedSections[section.id] || false) ? IconChevronUp : IconChevronDown}
                size="16"
                class="text-surface-400"
              />
            </button>
          {/if}
        </div>
        
        <!-- Section Items -->
        {#if !isCollapsed && (expandedSections[section.id] || false)}
          <div class="ml-8 space-y-1">
            {#each section.items as item}
              <a
                href={item.href}
                class="group flex items-center p-2 rounded-lg transition-all duration-200 {
                  activeRoute(item.href)
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100'
                }"
                title={item.description}
              >
                <div class="flex-1">
                  <div class="text-sm font-medium">{item.label}</div>
                  <div class="text-xs opacity-75">{item.description}</div>
                </div>
              </a>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </nav>
  
  <!-- Bottom Section -->
  <div class="border-t border-surface-200-800 p-4 space-y-4 flex-shrink-0">
    <!-- Social Links -->
    <div class="space-y-1">
      {#if !isCollapsed}
        <div class="hidden lg:block text-xs text-surface-500 dark:text-surface-400 font-medium uppercase tracking-wide mb-2">
          Community
        </div>
      {/if}
      {#each socialLinks as social}
        <a
          href={social.href}
          target={social.external ? "_blank" : undefined}
          rel={social.external ? "noopener noreferrer" : undefined}
          class="group flex items-center p-2 rounded-lg transition-all duration-200 text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 hover:text-surface-900 dark:hover:text-surface-100 {
            isCollapsed ? 'justify-center' : 'justify-center lg:justify-start'
          }"
          title={social.label}
        >
          <svelte:component this={social.icon} size="18" class="flex-shrink-0" />
          {#if !isCollapsed}
            <span class="hidden lg:block ml-3 text-sm">{social.label}</span>
            {#if social.external}
              <IconExternalLink size="12" class="hidden lg:block ml-auto opacity-50 group-hover:opacity-100" />
            {/if}
          {/if}
        </a>
      {/each}
    </div>
    
    <!-- Theme toggle -->
    {#if !isCollapsed}
      <div class="flex items-center justify-center p-2">
        <LightSwitch />
      </div>
    {/if}
    
    <!-- Collapse/Expand Button -->
    <div class="pt-1">
      <button
        on:click={() => isCollapsed = !isCollapsed}
        class="w-full flex items-center justify-center p-1.5 transition-all duration-200 text-surface-400 hover:text-surface-600 dark:hover:text-surface-300"
        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {#if isCollapsed}
          <IconChevronRight size="16" />
        {:else}
          <IconChevronLeft size="16" />
        {/if}
      </button>
    </div>
  </div>
</div>

<style>
  /* Custom scrollbar for the sidebar */
  nav {
    scrollbar-width: thin;
    scrollbar-color: rgb(var(--color-surface-300)) transparent;
  }
  
  nav::-webkit-scrollbar {
    width: 4px;
  }
  
  nav::-webkit-scrollbar-track {
    background: transparent;
  }
  
  nav::-webkit-scrollbar-thumb {
    background-color: rgb(var(--color-surface-300));
    border-radius: 2px;
  }
  
  nav::-webkit-scrollbar-thumb:hover {
    background-color: rgb(var(--color-surface-400));
  }
  
  /* Smooth transitions for section expansion */
  .space-y-1 > div {
    transition: all 0.2s ease-in-out;
  }
</style>
