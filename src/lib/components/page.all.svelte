<script lang="ts">
	import { layoutContext } from '$lib/components/context.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { Snippet } from 'svelte';
	import LazyComponent from './internal/lazy-component.svelte';
	import PageContainer from './internal/page-container.svelte';

	let {
		container: customListContainer = undefined,
	}: {
		container?: Snippet<[{ children: Snippet }]>;
	} = $props();

	const config = layoutContext.get();

	let query: string | undefined = $state('');
	let filter = $derived(query?.trim().toLowerCase());
</script>

<div class="flex w-full flex-col gap-2">
	<Label for="filter-components">Filter by name</Label>
	<Input type="text" id="filter-components" placeholder="Component Name" bind:value={query} />
</div>

<Separator class="my-4" />

{#each config.components as [id, selection] (id)}
	{#if customListContainer}
		{#snippet customListStories()}
			<LazyComponent {selection} />
		{/snippet}

		{@render customListContainer({ children: customListStories })}
	{:else if !filter || selection.config.name.toLowerCase().includes(filter)}
		<h2 class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
			{selection.config.name}
		</h2>
		<PageContainer>
			<LazyComponent {selection} />
		</PageContainer>
	{/if}
{/each}
