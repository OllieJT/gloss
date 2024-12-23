import type { GlossConfigData, GlossModuleData } from '$lib/index.js';

export type LinkGroup = Record<string, GlossModuleData[]>;

export function appSidebarLinks(components: GlossConfigData['components']) {
	return Array.from(components).reduce(
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		(acc, [filepath, component]) => {
			const groups = component.config.groups;
			groups.forEach((group) => {
				if (!acc[group]) acc[group] = [];
				acc[group].push(component);
			});
			acc.All.push(component);
			return acc;
		},
		{
			All: [],
		} as LinkGroup,
	);
}

export function useSortedSidebarLinks(data: LinkGroup) {
	return Object.entries(data)
		.sort(([aName], [bName]) => {
			console.log(aName, bName);
			if (aName === 'All') {
				return 1;
			} else if (bName === 'All') {
				return -1;
			} else {
				console.log('Returning', aName.localeCompare(bName));
				return aName.localeCompare(bName);
			}
		})
		.map(([group, links]) => {
			return {
				name: group,
				links: links.sort((a, b) => {
					return a.config.name.localeCompare(b.config.name);
				}),
			};
		});
}
