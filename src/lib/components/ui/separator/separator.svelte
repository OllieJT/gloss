<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Separator as SeparatorPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		orientation = 'horizontal',
		...restProps
	}: SeparatorPrimitive.RootProps = $props();
</script>

<SeparatorPrimitive.Root
	bind:ref
	class={cn(
		'sg-shrink-0 sg-bg-border',
		orientation === 'horizontal' ? 'sg-h-[1px] sg-w-full' : 'sg-min-h-full sg-w-[1px]',
		className,
	)}
	{orientation}
	{...restProps}
/>
