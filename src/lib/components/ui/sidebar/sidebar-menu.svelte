<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLUListElement>, HTMLUListElement> = $props();
</script>

<ul
	bind:this={ref}
	data-sidebar="menu"
	class={cn('sg-flex sg-w-full sg-min-w-0 sg-flex-col sg-gap-1', className)}
	{...restProps}
>
	{@render children?.()}
</ul>
