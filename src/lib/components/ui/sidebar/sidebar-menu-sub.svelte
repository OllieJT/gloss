<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLUListElement>> = $props();
</script>

<ul
	bind:this={ref}
	data-sidebar="menu-sub"
	class={cn(
		'sg-mx-3.5 sg-flex sg-min-w-0 sg-translate-x-px sg-flex-col sg-gap-1 sg-border-l sg-border-sidebar-border sg-px-2.5 sg-py-0.5',
		'group-data-[collapsible=icon]:sg-hidden',
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</ul>
