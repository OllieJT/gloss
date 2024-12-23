<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Dialog as SheetPrimitive } from 'bits-ui';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: SheetPrimitive.TitleProps = $props();
</script>

<SheetPrimitive.Title
	bind:ref
	class={cn('text-lg font-semibold text-foreground', className)}
	{...restProps}
/>
