<script lang="ts">
	import { layoutContext } from '$lib/components/context.js';
	import AppSidebar from '$lib/components/internal/layout-sidebar.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { GlossModeData, SetGlossMode, GlossConfigData } from '$lib/index.js';
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

<div class={cn('bg-background text-foreground', mode === 'dark' ? 'dark' : '')}>
	<Sidebar.Provider>
		<AppSidebar {setMode} {mode} />
		<Sidebar.Inset>
			<header class="flex h-16 shrink-0 items-center gap-2 border-b px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 h-4" />
			</header>
			<div class="grid grid-cols-1 gap-4 p-4">
				{@render children?.()}
			</div>
		</Sidebar.Inset>
	</Sidebar.Provider>
</div>
