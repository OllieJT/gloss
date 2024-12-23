<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> = $props();

	const sidebar = useSidebar();
</script>

<button
	bind:this={ref}
	data-sidebar="rail"
	aria-label="Toggle Sidebar"
	tabIndex={-1}
	onclick={() => sidebar.toggle()}
	title="Toggle Sidebar"
	class={cn(
		'sg-absolute sg-inset-y-0 sg-z-20 sg-hidden sg-w-4 -sg-translate-x-1/2 sg-transition-all sg-ease-linear after:sg-absolute after:sg-inset-y-0 after:sg-left-1/2 after:sg-w-[2px] hover:after:sg-bg-sidebar-border group-data-[side=left]:-sg-right-4 group-data-[side=right]:sg-left-0 sm:sg-flex',
		'[[data-side=left]_&]:sg-cursor-w-resize [[data-side=right]_&]:sg-cursor-e-resize',
		'[[data-side=left][data-state=collapsed]_&]:sg-cursor-e-resize [[data-side=right][data-state=collapsed]_&]:sg-cursor-w-resize',
		'group-data-[collapsible=offcanvas]:sg-translate-x-0 group-data-[collapsible=offcanvas]:after:sg-left-full group-data-[collapsible=offcanvas]:hover:sg-bg-sidebar',
		'[[data-side=left][data-collapsible=offcanvas]_&]:-sg-right-2',
		'[[data-side=right][data-collapsible=offcanvas]_&]:-sg-left-2',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</button>
