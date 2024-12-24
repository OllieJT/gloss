<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithElementRef<HTMLInputAttributes> = $props();
</script>

<input
	bind:this={ref}
	class={cn(
		'sg-flex sg-h-10 sg-w-full sg-rounded-md sg-border sg-border-input sg-bg-background sg-px-3 sg-py-2 sg-text-base sg-ring-offset-background file:sg-border-0 file:sg-bg-transparent file:sg-text-sm file:sg-font-medium placeholder:sg-text-muted-foreground focus-visible:sg-outline-none focus-visible:sg-ring-2 focus-visible:sg-ring-ring focus-visible:sg-ring-offset-2 disabled:sg-cursor-not-allowed disabled:sg-opacity-50 md:sg-text-sm',
		className,
	)}
	bind:value
	{...restProps}
/>
