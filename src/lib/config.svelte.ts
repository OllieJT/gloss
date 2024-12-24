import { formatPrefix } from '$lib/internal/format.js';
import { glossComponentSchema } from '$lib/internal/schema.js';
import { SvelteMap } from 'svelte/reactivity';
import type { GlossConfigData, GlossModuleData } from './types.js';

export class SvelteGloss {
	#prefix: GlossConfigData['prefix'] = $state('/');
	#parameter: GlossConfigData['parameter'] = $state('id');
	#components: GlossConfigData['components'] = new SvelteMap();

	config: GlossConfigData = $derived({
		components: this.#components,
		parameter: this.#parameter,
		prefix: this.#prefix,
	});

	constructor(config?: Partial<GlossConfigData>) {
		this.#prefix = '/' + formatPrefix(config?.prefix || '/__gloss__');
		this.#components = config?.components || new SvelteMap();
		this.#parameter = config?.parameter || 'id';
	}

	registerComponent({ config: rawConfig, ...rest }: Omit<GlossModuleData, 'href'>) {
		const validateConfig = glossComponentSchema.safeParse(rawConfig);
		if (!validateConfig.success) {
			console.error(`Invalid config for gloss component: ${rawConfig.id}`);
			console.error(validateConfig.error.message);
			return;
		}

		const config = validateConfig.data;
		const href = [this.#prefix, config.id].filter(Boolean).join('/').replace(/\/\/+/g, '/');

		this.#components.set(config.id, {
			...rest,
			config,
			href: href,
		});
	}
}
