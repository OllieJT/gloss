<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	class={cn(
		'sg-flex sg-flex-col-reverse sm:sg-flex-row sm:sg-justify-end sm:sg-space-x-2',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</div>
