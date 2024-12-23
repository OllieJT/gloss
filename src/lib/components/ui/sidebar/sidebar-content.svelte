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
	data-sidebar="content"
	class={cn(
		'sg-flex sg-min-h-0 sg-flex-1 sg-flex-col sg-gap-2 sg-overflow-auto group-data-[collapsible=icon]:sg-overflow-hidden',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</div>
