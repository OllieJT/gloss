<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		showIcon = false,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> & {
		showIcon?: boolean;
	} = $props();

	// Random width between 50% and 90%
	const width = `${Math.floor(Math.random() * 40) + 50}%`;
</script>

<div
	bind:this={ref}
	data-sidebar="menu-skeleton"
	class={cn('sg-flex sg-h-8 sg-items-center sg-gap-2 sg-rounded-md sg-px-2', className)}
	{...restProps}
>
	{#if showIcon}
		<Skeleton class="sg-size-4 sg-rounded-md" data-sidebar="menu-skeleton-icon" />
	{/if}
	<Skeleton
		class="sg-h-4 sg-max-w-[--skeleton-width] sg-flex-1"
		data-sidebar="menu-skeleton-text"
		style="--skeleton-width: {width};"
	/>
	{@render children?.()}
</div>
