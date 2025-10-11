<script lang="ts">
    import { Switch } from '@skeletonlabs/skeleton-svelte';
    import { browser } from '$app/environment';
    import IconMoon from '@lucide/svelte/icons/moon';
    import IconSun from '@lucide/svelte/icons/sun';

    let checked = $state(false);

    $effect(() => {
      if (!browser) return;
      
      const mode = localStorage.getItem('mode') || 'light';
      checked = mode === 'dark';
      
      // Set initial theme using Skeleton's data-mode attribute
      document.documentElement.setAttribute('data-mode', mode);
    });

    const onCheckedChange = (event: { checked: boolean }) => {
      if (!browser) return;
      
      const mode = event.checked ? 'dark' : 'light';
      
      // Update Skeleton's data-mode attribute
      document.documentElement.setAttribute('data-mode', mode);
      
      localStorage.setItem('mode', mode);
      checked = event.checked;
    };
</script>

<svelte:head>
    <script>
      if (typeof window !== 'undefined') {
        const mode = localStorage.getItem('mode') || 'light';
        document.documentElement.setAttribute('data-mode', mode);
      }
    </script>
</svelte:head>

<Switch 
    name="mode"  
    {checked} 
    onCheckedChange={onCheckedChange}
>
    {#snippet inactiveChild()}<IconSun size="14" />{/snippet}
    {#snippet activeChild()}<IconMoon size="14" />{/snippet}
</Switch>
