import type { GlossConfigData } from '$lib/index.js';
import type { GlossFilterGroup, GlossFilterOption } from '$lib/types.js';

export function componentsToOptions(components: GlossConfigData['components']): GlossFilterGroup[] {
	const groupMap = Array.from(components).reduce(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		(acc, [filepath, component]) => {
			const groups = component.config.groups;
			groups.forEach((group) => {
				if (!acc[group]) acc[group] = [];
				acc[group].push({
					label: component.config.name,
					value: component.config.id,
					href: component.href,
				});
			});

			return acc;
		},
		{} as Record<string, GlossFilterOption[]>,
	);

	return Object.entries(groupMap)
		.map(([group, options]) => {
			return {
				label: group,
				options: options.sort((a, b) => a.label.localeCompare(b.label)),
			};
		})
		.sort((a, b) => a.label.localeCompare(b.label));
}
