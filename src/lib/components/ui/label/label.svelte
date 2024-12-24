<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Label as LabelPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: LabelPrimitive.RootProps = $props();
</script>

<LabelPrimitive.Root
	bind:ref
	class={cn(
		'sg-text-sm sg-font-medium sg-leading-none peer-disabled:sg-cursor-not-allowed peer-disabled:sg-opacity-70',
		className,
	)}
	{...restProps}
/>
