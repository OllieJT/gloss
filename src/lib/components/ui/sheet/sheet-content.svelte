<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';
	export const sheetVariants = tv({
		base: 'sg-fixed sg-z-50 sg-gap-4 sg-bg-background sg-p-6 sg-shadow-lg sg-transition sg-ease-in-out data-[state=closed]:sg-duration-300 data-[state=open]:sg-duration-500 data-[state=open]:sg-animate-in data-[state=closed]:sg-animate-out',
		variants: {
			side: {
				top: 'sg-inset-x-0 sg-top-0 sg-border-b data-[state=closed]:sg-slide-out-to-top data-[state=open]:sg-slide-in-from-top',
				bottom:
					'sg-inset-x-0 sg-bottom-0 sg-border-t data-[state=closed]:sg-slide-out-to-bottom data-[state=open]:sg-slide-in-from-bottom',
				left: 'sg-inset-y-0 sg-left-0 sg-h-full sg-w-3/4 sg-border-r data-[state=closed]:sg-slide-out-to-left data-[state=open]:sg-slide-in-from-left sm:sg-max-w-sm',
				right:
					'sg-inset-y-0 sg-right-0 sg-h-full sg-w-3/4 sg-border-l data-[state=closed]:sg-slide-out-to-right data-[state=open]:sg-slide-in-from-right sm:sg-max-w-sm',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	});

	export type Side = VariantProps<typeof sheetVariants>['side'];
</script>

<script lang="ts">
	import { cn } from '$lib/internal/utils.js';
	import { Dialog as SheetPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import X from 'lucide-svelte/icons/x';
	import type { Snippet } from 'svelte';
	import SheetOverlay from './sheet-overlay.svelte';

	let {
		ref = $bindable(null),
		class: className,
		side = 'right',
		portalProps,
		children,
		...restProps
	}: WithoutChildrenOrChild<SheetPrimitive.ContentProps> & {
		portalProps?: SheetPrimitive.PortalProps;
		side?: Side;
		children: Snippet;
	} = $props();
</script>

<SheetPrimitive.Portal {...portalProps}>
	<SheetOverlay />
	<SheetPrimitive.Content bind:ref class={cn(sheetVariants({ side }), className)} {...restProps}>
		{@render children?.()}
		<SheetPrimitive.Close
			class="sg-absolute sg-right-4 sg-top-4 sg-rounded-sm sg-opacity-70 sg-ring-offset-background sg-transition-opacity hover:sg-opacity-100 focus:sg-outline-none focus:sg-ring-2 focus:sg-ring-ring focus:sg-ring-offset-2 disabled:sg-pointer-events-none data-[state=open]:sg-bg-secondary"
		>
			<X class="sg-size-4" />
			<span class="sg-sr-only">Close</span>
		</SheetPrimitive.Close>
	</SheetPrimitive.Content>
</SheetPrimitive.Portal>
