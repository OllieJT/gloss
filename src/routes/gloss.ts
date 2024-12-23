import { type GlossModuleData, SvelteGloss } from '$lib/index.js';

export const svelteGloss = new SvelteGloss({
	prefix: '/',
});

// import all files from '$lib/components/**/*.story.svelte */
const stories = import.meta.glob<boolean, string, GlossModuleData>(
	'$lib/components/**/*.stories.svelte',
);

Object.entries(stories).forEach(async ([pathname, lazyComponent]) => {
	try {
		const component = await lazyComponent();
		svelteGloss.registerComponent(component);
	} catch (error) {
		console.error(`🚧 Error registering: ${pathname}`, error);
	}
});
