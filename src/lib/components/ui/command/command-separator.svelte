<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: CommandPrimitive.SeparatorProps = $props();
</script>

<CommandPrimitive.Separator
	class={cn('-sg-mx-1 sg-h-px sg-bg-border', className)}
	bind:ref
	{...restProps}
/>
