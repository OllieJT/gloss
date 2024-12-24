<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CommandPrimitive.ListProps = $props();
</script>

<CommandPrimitive.List
	class={cn('sg-max-h-[300px] sg-overflow-y-auto sg-overflow-x-hidden', className)}
	{...restProps}
	bind:ref
/>
