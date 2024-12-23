<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { SIDEBAR_WIDTH_MOBILE } from './constants.js';
	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		side = 'left',
		variant = 'sidebar',
		collapsible = 'offcanvas',
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		side?: 'left' | 'right';
		variant?: 'sidebar' | 'floating' | 'inset';
		collapsible?: 'offcanvas' | 'icon' | 'none';
	} = $props();

	const sidebar = useSidebar();
</script>

{#if collapsible === 'none'}
	<div
		class={cn(
			'sg-flex sg-h-full sg-w-[--sidebar-width] sg-flex-col sg-bg-sidebar sg-text-sidebar-foreground',
			className,
		)}
		bind:this={ref}
		{...restProps}
	>
		{@render children?.()}
	</div>
{:else if sidebar.isMobile}
	<Sheet.Root
		controlledOpen
		open={sidebar.openMobile}
		onOpenChange={sidebar.setOpenMobile}
		{...restProps}
	>
		<Sheet.Content
			data-sidebar="sidebar"
			data-mobile="true"
			class="sg-w-[--sidebar-width] sg-bg-sidebar sg-p-0 sg-text-sidebar-foreground [&>button]:sg-hidden"
			style="--sidebar-width: {SIDEBAR_WIDTH_MOBILE};"
			{side}
		>
			<div class="sg-flex sg-h-full sg-w-full sg-flex-col">
				{@render children?.()}
			</div>
		</Sheet.Content>
	</Sheet.Root>
{:else}
	<div
		bind:this={ref}
		class="sg-md:sg-block sg-group sg-peer sg-hidden sg-text-sidebar-foreground"
		data-state={sidebar.state}
		data-collapsible={sidebar.state === 'collapsed' ? collapsible : ''}
		data-variant={variant}
		data-side={side}
	>
		<!-- This is what handles the sidebar gap on desktop -->
		<div
			class={cn(
				'sg-relative sg-h-svh sg-w-[--sidebar-width] sg-bg-transparent sg-transition-[width] sg-duration-200 sg-ease-linear',
				'group-data-[collapsible=offcanvas]:sg-w-0',
				'group-data-[side=right]:sg-rotate-180',
				variant === 'floating' || variant === 'inset'
					? 'group-data-[collapsible=icon]:sg-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
					: 'group-data-[collapsible=icon]:sg-w-[--sidebar-width-icon]',
			)}
		></div>
		<div
			class={cn(
				'sg-fixed sg-inset-y-0 sg-z-10 sg-hidden sg-h-svh sg-w-[--sidebar-width] sg-transition-[left,right,width] sg-duration-200 sg-ease-linear md:sg-flex',
				side === 'left'
					? 'sg-left-0 group-data-[collapsible=offcanvas]:sg-left-[calc(var(--sidebar-width)*-1)]'
					: 'sg-right-0 group-data-[collapsible=offcanvas]:sg-right-[calc(var(--sidebar-width)*-1)]',
				// Adjust the padding for floating and inset variants.
				variant === 'floating' || variant === 'inset'
					? 'sg-p-2 group-data-[collapsible=icon]:sg-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
					: 'group-data-[collapsible=icon]:sg-w-[--sidebar-width-icon] group-data-[side=left]:sg-border-r group-data-[side=right]:sg-border-l',
				className,
			)}
			{...restProps}
		>
			<div
				data-sidebar="sidebar"
				class="sg-flex sg-h-full sg-w-full sg-flex-col sg-bg-sidebar group-data-[variant=floating]:sg-rounded-lg group-data-[variant=floating]:sg-border group-data-[variant=floating]:sg-border-sidebar-border group-data-[variant=floating]:sg-shadow"
			>
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}
