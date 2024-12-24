<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Popover as PopoverPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		sideOffset = 4,
		align = 'center',
		portalProps,
		...restProps
	}: PopoverPrimitive.ContentProps & {
		portalProps?: PopoverPrimitive.PortalProps;
	} = $props();
</script>

<PopoverPrimitive.Portal {...portalProps}>
	<PopoverPrimitive.Content
		bind:ref
		{sideOffset}
		{align}
		class={cn(
			className,
			'sg-z-50 sg-w-72 sg-border-collapse sg-rounded-md sg-bg-popover sg-p-4 sg-text-popover-foreground sg-shadow-md sg-outline-none data-[state=open]:sg-animate-in data-[state=closed]:sg-animate-out data-[state=closed]:sg-fade-out-0 data-[state=open]:sg-fade-in-0 data-[state=closed]:sg-zoom-out-95 data-[state=open]:sg-zoom-in-95 data-[side=bottom]:sg-slide-in-from-top-2 data-[side=left]:sg-slide-in-from-right-2 data-[side=right]:sg-slide-in-from-left-2 data-[side=top]:sg-slide-in-from-bottom-2',
		)}
		{...restProps}
	/>
</PopoverPrimitive.Portal>
