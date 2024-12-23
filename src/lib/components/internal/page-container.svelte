<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<section
	data-gloss="list-container"
	class="@container/gloss-list grid min-h-max divide-y overflow-clip rounded-md border"
>
	{@render children()}
</section>
