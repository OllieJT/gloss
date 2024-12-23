<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		children,
		child,
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> & {
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	} = $props();

	const mergedProps = $derived({
		class: cn(
			'sg-text-sidebar-foreground/70 sg-ring-sidebar-ring sg-flex sg-h-8 sg-shrink-0 sg-items-center sg-rounded-md sg-px-2 sg-text-xs sg-font-medium sg-outline-none sg-transition-[margin,opa] sg-duration-200 sg-ease-linear focus-visible:sg-ring-2 [&>svg]:sg-size-4 [&>svg]:sg-shrink-0',
			'group-data-[collapsible=icon]:-sg-mt-8 group-data-[collapsible=icon]:sg-opacity-0',
			className,
		),
		'data-sidebar': 'group-label',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<div bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</div>
{/if}
