<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Command as CommandPrimitive } from 'bits-ui';
	import Search from 'lucide-svelte/icons/search';

	let {
		ref = $bindable(null),
		class: className,
		value = $bindable(''),
		...restProps
	}: CommandPrimitive.InputProps = $props();
</script>

<div class="sg-flex sg-items-center sg-border-b sg-px-2" data-command-input-wrapper="">
	<Search class="sg-mr-2 sg-size-4 sg-shrink-0 sg-opacity-50" />
	<CommandPrimitive.Input
		class={cn(
			'sg-flex sg-h-11 sg-w-full sg-rounded-md sg-bg-transparent sg-py-3 sg-text-base sg-outline-none placeholder:sg-text-muted-foreground disabled:sg-cursor-not-allowed disabled:sg-opacity-50 md:sg-text-sm',
			className,
		)}
		bind:ref
		{...restProps}
		bind:value
	/>
</div>
