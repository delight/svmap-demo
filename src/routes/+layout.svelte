<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<nav>
	<a href="/">HOME</a>
	{#each data.domains as domain}
		<a href="/domain/{domain}">{domain}</a>
	{/each}
</nav>

{@render children()}

<style>
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
</style>
