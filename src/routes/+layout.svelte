<script lang="ts">
	import { GlossLayout, type GlossModeData } from '$lib/index.js';
	import '../app.css';
	import { svelteGloss } from './gloss.js';

	let mode: GlossModeData = $state('dark');

	const { children } = $props();

	$effect(() => {
		if (mode === 'light') {
			// remove 'dark' class from <html>
			document.documentElement.classList.remove('sg-dark');
		} else {
			// add 'dark' class to <html>
			document.documentElement.classList.add('sg-dark');
		}
	});
</script>

<GlossLayout config={svelteGloss.config} {mode} setMode={(m) => (mode = m)}>
	{@render children()}
</GlossLayout>
