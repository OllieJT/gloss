<script lang="ts">
	import { layoutContext } from '$lib/components/internal/context.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Snippet } from 'svelte';
	import LazyComponent from './internal/lazy-component.svelte';
	import WrapPage from './wrap-page.svelte';

	let {
		container: customListContainer = undefined,
	}: {
		container?: Snippet<[{ children: Snippet }]>;
	} = $props();

	const config = layoutContext.get();

	let query: string | undefined = $state('');
	let filter = $derived(query?.trim().toLowerCase());
</script>

<div class="sg-flex sg-w-full sg-flex-col sg-gap-2">
	<Label for="filter-components">Filter by name</Label>
	<Input type="text" id="filter-components" placeholder="Component Name" bind:value={query} />
</div>

<Separator class="sg-my-4" />

{#each config.components as [id, selection] (id)}
	{#if customListContainer}
		{#snippet customListStories()}
			<LazyComponent {selection} />
		{/snippet}

		{@render customListContainer({ children: customListStories })}
	{:else if !filter || selection.config.name.toLowerCase().includes(filter)}
		<h2 class="sg-text-sm sg-font-medium sg-uppercase sg-tracking-wide sg-text-muted-foreground">
			{selection.config.name}
		</h2>
		<WrapPage>
			<LazyComponent {selection} />
		</WrapPage>
	{/if}
{/each}
