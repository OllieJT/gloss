<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div
	data-gloss="item-container"
	class="@container/gloss-item @sm/gloss-list:p-6 @xl/gloss-list:p-8 @5xl/gloss-list:p-10 @7xl/gloss-list:p-12 grid place-items-center gap-4 bg-background p-4"
>
	{@render children()}
</div>
