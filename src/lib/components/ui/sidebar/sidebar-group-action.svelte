<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		child,
		...restProps
	}: WithElementRef<HTMLButtonAttributes> & {
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	} = $props();

	const propObj = $derived({
		class: cn(
			'sg-text-sidebar-foreground sg-ring-sidebar-ring hover:sg-bg-sidebar-accent hover:sg-text-sidebar-accent-foreground sg-absolute sg-right-3 sg-top-3.5 sg-flex sg-aspect-square sg-w-5 sg-items-center sg-justify-center sg-rounded-md sg-p-0 sg-outline-none sg-transition-transform sg-focus-visible:sg-ring-2 [&>svg]:sg-size-4 [&>svg]:sg-shrink-0',
			// Increases the hit area of the button on mobile.
			'after:sg-absolute after:-sg-inset-2 after:sg-md:sg-hidden',
			'group-data-[collapsible=icon]:sg-hidden',
			className,
		),
		'data-sidebar': 'group-action',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: propObj })}
{:else}
	<button bind:this={ref} {...propObj}>
		{@render children?.()}
	</button>
{/if}
