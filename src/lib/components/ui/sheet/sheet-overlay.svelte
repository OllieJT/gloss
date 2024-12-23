<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Dialog as SheetPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SheetPrimitive.OverlayProps = $props();

	export { className as class };
</script>

<SheetPrimitive.Overlay
	bind:ref
	class={cn(
		'sg-fixed sg-inset-0 sg-z-50 sg-bg-black/80 data-[state=open]:sg-animate-in data-[state=closed]:sg-animate-out data-[state=closed]:sg-fade-out-0 data-[state=open]:sg-fade-in-0',
		className,
	)}
	{...restProps}
/>
