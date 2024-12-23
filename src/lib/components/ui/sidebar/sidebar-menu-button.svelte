<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const sidebarMenuButtonVariants = tv({
		base: 'sg-peer/menu-button sg-flex sg-w-full sg-items-center sg-gap-2 sg-overflow-hidden sg-rounded-md sg-p-2 sg-text-left sg-text-sm sg-outline-none sg-ring-sidebar-ring sg-transition-[width,height,padding] hover:sg-bg-sidebar-accent hover:sg-text-sidebar-accent-foreground focus-visible:sg-ring-2 active:sg-bg-sidebar-accent active:sg-text-sidebar-accent-foreground disabled:sg-pointer-events-none disabled:sg-opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:sg-pr-8 aria-disabled:sg-pointer-events-none aria-disabled:sg-opacity-50 data-[active=true]:sg-bg-sidebar-accent data-[active=true]:sg-font-medium data-[active=true]:sg-text-sidebar-accent-foreground data-[state=open]:hover:sg-bg-sidebar-accent data-[state=open]:hover:sg-text-sidebar-accent-foreground group-data-[collapsible=icon]:!sg-size-8 group-data-[collapsible=icon]:!sg-p-2 [&>span:last-child]:sg-truncate [&>svg]:sg-size-4 [&>svg]:sg-shrink-0',
		variants: {
			variant: {
				default: 'hover:sg-bg-sidebar-accent hover:sg-text-sidebar-accent-foreground',
				outline:
					'sg-bg-background sg-shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:sg-bg-sidebar-accent hover:sg-text-sidebar-accent-foreground hover:sg-shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
			},
			size: {
				default: 'sg-h-8 sg-text-sm',
				sm: 'sg-h-7 sg-text-xs',
				lg: 'sg-h-12 sg-text-sm group-data-[collapsible=icon]:!sg-p-0',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	});

	export type SidebarMenuButtonVariant = VariantProps<typeof sidebarMenuButtonVariants>['variant'];
	export type SidebarMenuButtonSize = VariantProps<typeof sidebarMenuButtonVariants>['size'];
</script>

<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { cn } from '$lib/internal/utils.js';
	import { mergeProps, type WithElementRef, type WithoutChildrenOrChild } from 'bits-ui';
	import type { ComponentProps, Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		child,
		variant = 'default',
		size = 'default',
		isActive = false,
		tooltipContent,
		tooltipContentProps,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
		isActive?: boolean;
		variant?: SidebarMenuButtonVariant;
		size?: SidebarMenuButtonSize;
		tooltipContent?: Snippet;
		tooltipContentProps?: WithoutChildrenOrChild<ComponentProps<typeof Tooltip.Content>>;
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	} = $props();

	const sidebar = useSidebar();

	const buttonProps = $derived({
		class: cn(sidebarMenuButtonVariants({ variant, size }), className),
		'data-sidebar': 'menu-button',
		'data-size': size,
		'data-active': isActive,
		...restProps,
	});
</script>

{#snippet Button({ props }: { props?: Record<string, unknown> })}
	{@const mergedProps = mergeProps(buttonProps, props)}
	{#if child}
		{@render child({ props: mergedProps })}
	{:else}
		<button bind:this={ref} {...mergedProps}>
			{@render children?.()}
		</button>
	{/if}
{/snippet}

{#if !tooltipContent}
	{@render Button({})}
{:else}
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				{@render Button({ props })}
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content
			side="right"
			align="center"
			hidden={sidebar.state !== 'collapsed' || sidebar.isMobile}
			children={tooltipContent}
			{...tooltipContentProps}
		/>
	</Tooltip.Root>
{/if}
