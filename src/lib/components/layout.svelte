<script lang="ts">
	import { componentsToOptions } from '$lib/components/internal/component-to-options.js';
	import { layoutContext } from '$lib/components/internal/context.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { GlossConfigData, GlossModeData, SetGlossMode } from '$lib/index.js';
	import { cn } from '$lib/internal/utils.js';
	import Moon from 'lucide-svelte/icons/moon';
	import Sun from 'lucide-svelte/icons/sun';
	import { type Snippet } from 'svelte';
	import '../layout.css';
	import Filter from './internal/filter.svelte';

	const {
		children,
		config,
		mode = 'light',
		setMode,
	}: {
		children?: Snippet;
		config: GlossConfigData;
		mode?: GlossModeData;
		setMode?: SetGlossMode;
	} = $props();

	layoutContext.set(config);

	const groups = $derived(componentsToOptions(config.components));
</script>

<div data-gloss="root" class="sg-flex sg-flex-col sg-bg-background sg-text-foreground">
	<div class="sg-flex sg-gap-2 sg-border-b sg-bg-card sg-p-4">
		<Filter
			class="sg-mr-auto sg-min-w-0 sg-flex-auto sg-shrink"
			{groups}
			placeholder="Select a component"
		/>
		{#if setMode}
			<Button
				variant={mode === 'light' ? 'default' : 'outline'}
				onclick={() => setMode('light')}
				size="icon"
				class="sg-min-w-max sg-shrink-0"
			>
				<Sun />
			</Button>
			<Button
				variant={mode === 'dark' ? 'default' : 'outline'}
				onclick={() => setMode('dark')}
				size="icon"
				class="sg-min-w-max sg-shrink-0"
			>
				<Moon />
			</Button>
		{/if}
	</div>

	<main
		class={cn(
			'sg-relative sg-flex sg-min-h-svh sg-flex-1 sg-flex-col sg-bg-background',
			'peer-data-[variant=inset]:sg-min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:sg-m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:sg-ml-2 md:peer-data-[variant=inset]:sg-ml-0 md:peer-data-[variant=inset]:sg-rounded-xl md:peer-data-[variant=inset]:sg-shadow',
		)}
	>
		<div class="sg-grid sg-grid-cols-1 sg-gap-4 sg-p-4">
			{@render children?.()}
		</div>
	</main>
</div>

<style lang="postcss">
	[data-gloss='root'] :global(*) {
		@apply sg-border-border;
	}
</style>
