<script lang="ts">
	import { SvelteMap } from 'svelte/reactivity';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let values = $state(new SvelteMap<string, boolean>([...data.values.entries()]));

	const activeValues = $derived(
		Array.from(values.keys()).filter((key) => (values.get(key) === true ? key : null))
	);
</script>

<h2>Map from Server</h2>
<ol>
	{#each data.values.keys() as value}
		<li>
			{value}
		</li>
	{/each}
</ol>

<h2>SvelteMap</h2>

<ol>
	{#each values.keys() as value}
		<li>
			{value}
		</li>
	{/each}
</ol>

<h3>as checkbox</h3>

{#each values.entries() as [key, value]}
	<label>
		<input
			type="checkbox"
			checked={value}
			onchange={() => {
				values.set(key, !value);
			}}
		/>
		{key}
	</label>
{/each}

<h3>filtered / reactive derived from SvelteMap</h3>

<ul>
	{#each activeValues as value}
		<li>{value}</li>
	{/each}
</ul>

<style>
	label {
		display: block;
		padding-left: 1rem;
	}
</style>
