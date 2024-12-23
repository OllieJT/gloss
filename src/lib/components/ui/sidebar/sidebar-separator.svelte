<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { cn } from '$lib/internal/utils.js';
	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: ComponentProps<typeof Separator> = $props();
</script>

<Separator
	bind:ref
	data-sidebar="separator"
	class={cn('sg-mx-2 sg-w-auto sg-bg-sidebar-border', className)}
	{...restProps}
/>
