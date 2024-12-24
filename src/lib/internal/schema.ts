import { formatComponentId } from '$lib/internal/format.js';
import type { Component } from 'svelte';
import { z } from 'zod';

const isValidGroups = (groups: string[]): groups is [string, ...string[]] => {
	return groups.length >= 1;
};

export const glossComponentSchema = z.object({
	id: z.string().transform(formatComponentId),
	name: z.string(),
	groups: z
		.array(z.string())
		.min(1)
		.default(['Unsorted'])
		.catch(['Unsorted'])
		.refine(isValidGroups),
});

export const glossModuleSchema = z.object({
	href: z.string(),
	config: glossComponentSchema,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	default: z.custom<Component<Record<string, any>>>(),
});

export const glossConfigSchema = z.object({
	prefix: z.string(),
	components: z.map(z.string(), glossModuleSchema),
	parameter: z.string(),
});

export const glossModeSchema = z.enum(['light', 'dark']);
