<script lang="ts">
	import { goto } from '$app/navigation';
	import { layoutContext } from '$lib/components/internal/context.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { cn } from '$lib/internal/utils.js';
	import type { GlossFilterGroup } from '$lib/types.js';
	import Check from 'lucide-svelte/icons/check';
	import ChevronsUpDown from 'lucide-svelte/icons/chevrons-up-down';
	import { tick } from 'svelte';

	let {
		placeholder = 'Select an option...',
		class: className,
		groups,
	}: {
		placeholder?: string;
		class?: string;
		groups: GlossFilterGroup[];
	} = $props();

	const config = layoutContext.get();

	// combine options from all groups
	const options = $derived(groups.flatMap((g) => g.options));

	let open = $state(false);
	let value = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);

	const selectedValue = $derived(options.find((f) => f.value === value)?.label);

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}
</script>

<Popover.Root bind:open>
	<Popover.Trigger bind:ref={triggerRef}>
		{#snippet child({ props })}
			<Button
				variant="outline"
				class={cn('sg-max-w-[280px] sg-justify-between', className)}
				{...props}
				role="combobox"
				aria-expanded={open}
			>
				<span class="sg-overflow-hidden sg-text-ellipsis">{selectedValue || placeholder}</span>
				<ChevronsUpDown class="sg-opacity-50" />
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="sg-w-[280px] !sg-p-1">
		<Command.Root class="!sg-p-1">
			<Command.Input placeholder="Search framework..." />
			<Command.List>
				<Command.Empty>No framework found.</Command.Empty>

				<Command.Group>
					<Command.Item
						value=""
						onSelect={() => {
							value = '';
							goto(config.prefix);
							closeAndFocusTrigger();
						}}
					>
						<Check class={cn(!Boolean(value) && 'sg-text-transparent')} />
						All
					</Command.Item>
				</Command.Group>

				{#each groups as group}
					<Command.Group heading={group.label}>
						{#each group.options as option}
							<Command.Item
								value={option.value}
								onSelect={() => {
									value = option.value;
									goto(option.href);
									closeAndFocusTrigger();
								}}
							>
								<Check class={cn(value !== option.value && 'sg-text-transparent')} />
								{option.label}
							</Command.Item>
						{/each}
					</Command.Group>
				{/each}
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
