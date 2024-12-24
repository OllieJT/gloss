<script lang="ts" module>
	import { GlossWrapComponent, defineGlossComponent } from '$lib/index.js';

	export const config = defineGlossComponent({
		id: 'input',
		name: 'Input',
		groups: ['form'],
	});
</script>

<script lang="ts">
	import * as Input from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';

	type Props = {
		type: string;
		placeholder: string;
		label?: string;
		disabled?: boolean;
		title: string;
		description?: string;
	};

	const variations: Props[] = [
		{
			type: 'email',
			placeholder: 'Email',
			label: 'Email',
			title: 'Email Input',
			description: 'A standard email input field.',
		},
		{
			type: 'password',
			placeholder: 'Password',
			label: 'Password',
			title: 'Password Input',
			description: 'A secure password input field.',
		},
		{
			type: 'text',
			placeholder: 'Username',
			label: 'Username',
			title: 'Text Input',
			description: 'A basic text input field.',
		},
		{
			type: 'text',
			placeholder: 'Disabled input',
			label: 'Disabled',
			disabled: true,
			title: 'Disabled Input',
			description: 'A disabled input field.',
		},
	];
</script>

{#each variations as variation, i (i)}
	<GlossWrapComponent>
		<div class="sg-grid sg-w-full sg-max-w-sm sg-items-center sg-gap-2">
			{#if variation.label}
				<Label for={variation.type}>{variation.label}</Label>
			{/if}
			<Input.Root
				type={variation.type}
				id={variation.type}
				placeholder={variation.placeholder}
				disabled={variation.disabled}
			/>
		</div>
	</GlossWrapComponent>
{/each}
