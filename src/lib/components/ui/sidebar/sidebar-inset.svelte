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

<main
	bind:this={ref}
	class={cn(
		'sg-relative sg-flex sg-min-h-svh sg-flex-1 sg-flex-col sg-bg-background',
		'peer-data-[variant=inset]:sg-min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:sg-m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:sg-ml-2 md:peer-data-[variant=inset]:sg-ml-0 md:peer-data-[variant=inset]:sg-rounded-xl md:peer-data-[variant=inset]:sg-shadow',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</main>
