<script lang="ts">
	import { layoutContext } from '$lib/components/context.js';
	import type { Snippet } from 'svelte';
	import LazyComponent from './internal/lazy-component.svelte';
	import PageContainer from './internal/page-container.svelte';

	let {
		container: customListContainer = undefined,
	}: {
		container?: Snippet<[{ children: Snippet }]>;
	} = $props();

	const config = layoutContext.get();
</script>

{#each config.components as [id, selection] (id)}
	{#if customListContainer}
		{#snippet customListStories()}
			<LazyComponent {selection} />
		{/snippet}

		{@render customListContainer({ children: customListStories })}
	{:else}
		<h2 class="text-sm font-medium uppercase tracking-wide text-muted-foreground">
			{selection.config.name}
		</h2>
		<PageContainer>
			<LazyComponent {selection} />
		</PageContainer>
	{/if}
{/each}
