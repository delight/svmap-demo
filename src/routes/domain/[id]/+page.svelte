<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let values = $state(data.values);

	const activeValues = $derived(Object.keys(values).filter((key) => values[key]));
</script>

<h2>Record from Server</h2>
<ol>
	{#each Object.keys(data.values) as value}
		<li>
			{value}
		</li>
	{/each}
</ol>

<h2>Record</h2>

<ol>
	{#each Object.keys(values) as value}
		<li>
			{value}
		</li>
	{/each}
</ol>

<h3>as checkbox</h3>

{#each Object.entries(values) as [key, value]}
	<label>
		<input type="checkbox" bind:checked={values[key]} />
		{key}
	</label>
{/each}

<h3>filtered / reactive derived from Record</h3>

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
