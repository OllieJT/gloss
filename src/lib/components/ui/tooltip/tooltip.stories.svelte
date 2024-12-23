<script lang="ts" context="module">
	import { GlossComponent, type ComponentConfig } from '$lib/index.js';

	export const config: ComponentConfig = {
		id: 'tooltip',
		name: 'Tooltip',
	};
</script>

<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	type Props = {
		trigger: string;
		content: string;
	};

	const variations: Props[] = [
		{
			trigger: 'Short',
			content: 'Add to library',
		},
		{
			trigger: 'Medium',
			content: 'Remove from your personal library',
		},
		{
			trigger: 'Long',
			content: 'This is an action that takes a long time to complete. You should be careful.',
		},
	];
</script>

<Tooltip.Provider>
	{#each variations as variation, i (i)}
		<GlossComponent>
			<Tooltip.Root>
				<Tooltip.Trigger class={buttonVariants({ variant: 'outline' })}>
					{variation.trigger}
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{variation.content}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</GlossComponent>
	{/each}
</Tooltip.Provider>
