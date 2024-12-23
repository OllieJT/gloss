<script lang="ts">
	import { GlossLayout, type GlossModeData } from '$lib/index.js';
	import '../app.css';
	import { svelteGloss } from './gloss.js';

	let mode: GlossModeData = $state('dark');

	const { children } = $props();
</script>

<GlossLayout config={svelteGloss.config} {mode} setMode={(m) => (mode = m)}>
	{@render children()}
</GlossLayout>
