<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<section
	data-gloss="list-container"
	class="sg-@container/gloss-list sg-grid sg-min-h-max sg-divide-y sg-overflow-clip sg-rounded-md sg-border"
>
	{@render children()}
</section>
