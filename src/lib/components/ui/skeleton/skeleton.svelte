<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef, WithoutChildren } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> = $props();
</script>

<div
	bind:this={ref}
	class={cn('sg-animate-pulse sg-rounded-md sg-bg-muted', className)}
	{...restProps}
></div>
