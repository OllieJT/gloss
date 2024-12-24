<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		children,
		heading,
		...restProps
	}: CommandPrimitive.GroupProps & {
		heading?: string;
	} = $props();
</script>

<CommandPrimitive.Group
	class={cn('sg-overflow-hidden sg-p-1 sg-text-foreground', className)}
	bind:ref
	{...restProps}
>
	{#if heading}
		<CommandPrimitive.GroupHeading
			class="sg-px-2 sg-py-1.5 sg-text-xs sg-font-medium sg-text-muted-foreground"
		>
			{heading}
		</CommandPrimitive.GroupHeading>
	{/if}
	<CommandPrimitive.GroupItems {children} />
</CommandPrimitive.Group>
