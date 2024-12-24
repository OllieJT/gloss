<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		value = $bindable(''),
		class: className,
		...restProps
	}: CommandPrimitive.RootProps = $props();
</script>

<CommandPrimitive.Root
	class={cn(
		'h-full w-full sg-flex sg-flex-col sg-overflow-hidden sg-rounded-md sg-bg-popover sg-text-popover-foreground',
		className,
	)}
	bind:value
	bind:ref
	{...restProps}
/>
