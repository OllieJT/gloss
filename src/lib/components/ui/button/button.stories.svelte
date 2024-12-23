<script lang="ts" module>
	import { GlossComponent, type ComponentConfig } from '$lib/index.js';

	export const config: ComponentConfig = {
		id: 'button',
		name: 'Button',
	};
</script>

<script lang="ts">
	import Mail from 'lucide-svelte/icons/mail';
	import { Button, type ButtonVariant } from './index.js';

	type Props = {
		variant: ButtonVariant;
		content: string;
		disabled: boolean;
	};

	const variations: Props[] = [
		{ variant: 'default', content: 'Default Button', disabled: false },
		{ variant: 'default', content: 'Disabled Button', disabled: true },
		{ variant: 'outline', content: 'Outline Button', disabled: false },
		{ variant: 'ghost', content: 'Ghost Button', disabled: false },
		{ variant: 'link', content: 'Link Button', disabled: false },
		{ variant: 'destructive', content: 'Positive Button', disabled: false },
	];
</script>

{#each variations as variation, i (i)}
	<GlossComponent>
		<Button
			variant={variation.variant}
			disabled={variation.disabled}
			onclick={() => alert('clicked')}
		>
			<Mail class="mr-2 size-4" />
			{variation.content}
		</Button>
	</GlossComponent>
{/each}
