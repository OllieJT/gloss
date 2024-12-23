<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div
	bind:this={ref}
	data-sidebar="group"
	class={cn('sg-relative sg-flex sg-w-full sg-min-w-0 sg-flex-col sg-p-2', className)}
	{...restProps}
>
	{@render children?.()}
</div>
