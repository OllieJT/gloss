<script lang="ts">
	import type { GlossModuleData } from '$lib/index.js';

	let {
		selection,
	}: {
		selection: GlossModuleData | undefined;
	} = $props();
</script>

{#if selection}
	<!-- if selection.default is a promise -->
	{#if selection instanceof Promise}
		{#await selection then component}
			<component.default />
		{/await}
	{:else}
		<selection.default />
	{/if}
{:else}
	<div class="sg-p-4">No Component</div>
{/if}
