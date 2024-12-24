<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import { type VariantProps, tv } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'sg-inline-flex sg-items-center sg-justify-center sg-gap-2 sg-whitespace-nowrap sg-rounded-md sg-text-sm sg-font-medium sg-ring-offset-background sg-transition-colors focus-visible:sg-outline-none focus-visible:sg-ring-2 focus-visible:sg-ring-ring focus-visible:sg-ring-offset-2 disabled:sg-pointer-events-none disabled:sg-opacity-50 [&_svg]:sg-pointer-events-none [&_svg]:sg-size-4 [&_svg]:sg-shrink-0',
		variants: {
			variant: {
				default: 'sg-bg-primary sg-text-primary-foreground hover:sg-bg-primary/90',
				destructive: 'sg-bg-destructive sg-text-destructive-foreground hover:sg-bg-destructive/90',
				outline:
					'sg-border sg-border-input sg-bg-background hover:sg-bg-accent hover:sg-text-accent-foreground',
				secondary: 'sg-bg-secondary sg-text-secondary-foreground hover:sg-bg-secondary/80',
				ghost: 'hover:sg-bg-accent hover:sg-text-accent-foreground',
				link: 'sg-text-primary sg-underline-offset-4 hover:sg-underline',
			},
			size: {
				default: 'sg-h-10 sg-px-4 sg-py-2',
				sm: 'sg-h-9 sg-rounded-md sg-px-3',
				lg: 'sg-h-11 sg-rounded-md sg-px-8',
				icon: 'sg-h-10 sg-w-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
	export type ButtonSize = VariantProps<typeof buttonVariants>['size'];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	import { cn } from '$lib/internal/utils.js';

	let {
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		href = undefined,
		type = 'button',
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a bind:this={ref} class={cn(buttonVariants({ variant, size, className }))} {href} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ variant, size, className }))}
		{type}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
