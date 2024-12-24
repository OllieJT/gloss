<script lang="ts" context="module">
	import { GlossWrapComponent, defineGlossComponent } from '$lib/index.js';

	export const config = defineGlossComponent({
		id: 'tooltip',
		name: 'Tooltip',
		groups: ['Unsorted'],
	});
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
		<GlossWrapComponent>
			<Tooltip.Root>
				<Tooltip.Trigger class={buttonVariants({ variant: 'outline' })}>
					{variation.trigger}
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{variation.content}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</GlossWrapComponent>
	{/each}
</Tooltip.Provider>
