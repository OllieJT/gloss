<script lang="ts">
	import { layoutContext } from '$lib/components/context.js';
	import AppSidebar from '$lib/components/internal/layout-sidebar.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { GlossConfigData, GlossModeData, SetGlossMode } from '$lib/index.js';
	import { cn } from '$lib/internal/utils.js';
	import { type Snippet } from 'svelte';
	import './layout.css';

	const {
		children,
		config,
		mode,
		setMode,
	}: {
		children?: Snippet;
		config: GlossConfigData;
		mode: GlossModeData;
		setMode?: SetGlossMode;
	} = $props();

	layoutContext.set(config);
</script>

<div class={cn('sg-bg-background sg-text-foreground', mode === 'dark' ? 'sg-dark' : '')}>
	<Sidebar.Provider>
		<AppSidebar {setMode} {mode} />
		<Sidebar.Inset>
			<header class="sg-flex sg-h-16 sg-shrink-0 sg-items-center sg-gap-2 sg-border-b sg-px-4">
				<Sidebar.Trigger class="-sg-ml-1" />
				<Separator orientation="vertical" class="sg-mr-2 sg-h-4" />
			</header>
			<div class="sg-grid sg-grid-cols-1 sg-gap-4 sg-p-4">
				{@render children?.()}
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
</div>
