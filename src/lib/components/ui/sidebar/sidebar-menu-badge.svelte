<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="menu-badge"
	class={cn(
		'sg-pointer-events-none sg-absolute sg-right-1 sg-flex sg-h-5 sg-min-w-5 sg-select-none sg-items-center sg-justify-center sg-rounded-md sg-px-1 sg-text-xs sg-font-medium sg-tabular-nums sg-text-sidebar-foreground',
		'peer-hover/menu-button:sg-text-sidebar-accent-foreground peer-data-[active=true]/menu-button:sg-text-sidebar-accent-foreground',
		'peer-data-[size=sm]/menu-button:sg-top-1',
		'peer-data-[size=default]/menu-button:sg-top-1.5',
		'peer-data-[size=lg]/menu-button:sg-top-2.5',
		'group-data-[collapsible=icon]:sg-hidden',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</div>
