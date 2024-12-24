<script lang="ts">
	import { page } from '$app/state';
	import { layoutContext } from '$lib/components/internal/context.js';
	import type { Snippet } from 'svelte';
	import LazyComponent from './internal/lazy-component.svelte';
	import PageContainer from './wrap-page.svelte';

	let {
		container: customListContainer = undefined,
	}: {
		container?: Snippet<[{ children: Snippet }]>;
	} = $props();

	const config = layoutContext.get();
	const selection = $derived(config.components.get(page.params[config.parameter]));
</script>

{#if customListContainer}
	{#snippet customListStories()}
		<LazyComponent {selection} />
	{/snippet}

	{@render customListContainer({ children: customListStories })}
{:else}
	<PageContainer>
		<LazyComponent {selection} />
	</PageContainer>
{/if}
