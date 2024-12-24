<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CommandPrimitive.ItemProps = $props();
</script>

<CommandPrimitive.Item
	class={cn(
		'sg-relative sg-flex sg-cursor-default sg-select-none sg-items-center sg-gap-2 sg-rounded-sm sg-px-2 sg-py-1.5 sg-text-sm sg-outline-none aria-selected:sg-bg-accent aria-selected:sg-text-accent-foreground data-[disabled]:sg-pointer-events-none data-[disabled]:sg-opacity-50 [&_svg]:sg-pointer-events-none [&_svg]:sg-size-4 [&_svg]:sg-shrink-0',
		className,
	)}
	bind:ref
	{...restProps}
/>
