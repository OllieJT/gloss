<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import { cn } from '$lib/internal/utils.js';
	import type { ComponentProps } from 'svelte';

	let {
		ref = $bindable(null),
		value = $bindable(''),
		class: className,
		...restProps
	}: ComponentProps<typeof Input> = $props();
</script>

<Input
	bind:ref
	bind:value
	data-sidebar="input"
	class={cn(
		'sg-h-8 sg-w-full sg-bg-background sg-shadow-none focus-visible:sg-ring-2 focus-visible:sg-ring-sidebar-ring',
		className,
	)}
	{...restProps}
/>
