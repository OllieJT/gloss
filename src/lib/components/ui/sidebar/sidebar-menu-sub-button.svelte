<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		children,
		child,
		class: className,
		size = 'md',
		isActive,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		child?: Snippet<[{ props: Record<string, unknown> }]>;
		size?: 'sm' | 'md';
		isActive?: boolean;
	} = $props();

	const mergedProps = $derived({
		class: cn(
			'sg-text-sidebar-foreground sg-ring-sidebar-ring hover:sg-bg-sidebar-accent hover:sg-text-sidebar-accent-foreground active:sg-bg-sidebar-accent active:sg-text-sidebar-accent-foreground [&>svg]:sg-text-sidebar-accent-foreground sg-flex sg-h-7 sg-min-w-0 sg--translate-x-px sg-items-center sg-gap-2 sg-overflow-hidden sg-rounded-md sg-px-2 sg-outline-none focus-visible:sg-ring-2 disabled:sg-pointer-events-none disabled:sg-opacity-50 aria-disabled:sg-pointer-events-none aria-disabled:sg-opacity-50 [&>span:last-child]:sg-truncate [&>svg]:sg-size-4 [&>svg]:sg-shrink-0',
			'data-[active=true]:sg-bg-sidebar-accent data-[active=true]:sg-text-sidebar-accent-foreground',
			size === 'sm' && 'sg-text-xs',
			size === 'md' && 'sg-text-sm',
			'group-data-[collapsible=icon]:sg-hidden',
			className,
		),
		'data-sidebar': 'menu-sub-button',
		'data-size': size,
		'data-active': isActive,
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<a bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</a>
{/if}
