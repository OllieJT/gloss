<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	data-gloss="item-container"
	class="sg-@container/gloss-item @sm/gloss-list:sg-p-6 @xl/gloss-list:sg-p-8 @5xl/gloss-list:sg-p-10 @7xl/gloss-list:sg-p-12 sg-grid sg-place-items-center sg-gap-4 sg-bg-card sg-p-4"
>
	{@render children()}
</div>
