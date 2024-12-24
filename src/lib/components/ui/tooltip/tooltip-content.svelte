<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Tooltip as TooltipPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		...restProps
	}: TooltipPrimitive.ContentProps = $props();
</script>

<TooltipPrimitive.Content
	bind:ref
	{sideOffset}
	class={cn(
		'sg-z-50 sg-overflow-hidden sg-rounded-md sg-border sg-bg-popover sg-px-3 sg-py-1.5 sg-text-sm sg-text-popover-foreground sg-shadow-md sg-animate-in sg-fade-in-0 sg-zoom-in-95 data-[state=closed]:sg-animate-out data-[state=closed]:sg-fade-out-0 data-[state=closed]:sg-zoom-out-95 data-[side=bottom]:sg-slide-in-from-top-2 data-[side=left]:sg-slide-in-from-right-2 data-[side=right]:sg-slide-in-from-left-2 data-[side=top]:sg-slide-in-from-bottom-2',
		className,
	)}
	{...restProps}
/>
