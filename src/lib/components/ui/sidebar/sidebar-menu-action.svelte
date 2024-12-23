<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		showOnHover = false,
		children,
		child,
		...restProps
	}: WithElementRef<HTMLButtonAttributes> & {
		child?: Snippet<[{ props: Record<string, unknown> }]>;
		showOnHover?: boolean;
	} = $props();

	const mergedProps = $derived({
		class: cn(
			'sg-text-sidebar-foreground sg-ring-sidebar-ring hover:sg-bg-sidebar-accent hover:sg-text-sidebar-accent-foreground peer-hover/menu-button:sg-text-sidebar-accent-foreground sg-absolute sg-right-1 sg-top-1.5 sg-flex sg-aspect-square sg-w-5 sg-items-center sg-justify-center sg-rounded-md sg-p-0 sg-outline-none sg-transition-transform focus-visible:sg-ring-2 [&>svg]:sg-size-4 [&>svg]:sg-shrink-0',
			// Increases the hit area of the button on mobile.
			'after:sg-absolute after:-sg-inset-2 after:md:sg-hidden',
			'peer-data-[size=sm]/menu-button:sg-top-1',
			'peer-data-[size=default]/menu-button:sg-top-1.5',
			'peer-data-[size=lg]/menu-button:sg-top-2.5',
			'group-data-[collapsible=icon]:sg-hidden',
			showOnHover &&
				'peer-data-[active=true]/menu-button:sg-text-sidebar-accent-foreground group-focus-within/menu-item:sg-opacity-100 group-hover/menu-item:sg-opacity-100 data-[state=open]:sg-opacity-100 md:sg-opacity-0',
			className,
		),
		'data-sidebar': 'menu-action',
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<button bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</button>
{/if}
