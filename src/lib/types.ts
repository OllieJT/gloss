import type {
	glossComponentSchema,
	glossConfigSchema,
	glossModeSchema,
	glossModuleSchema,
} from '$lib/internal/schema.js';
import type { z } from 'zod';

export type GlossComponentData = z.infer<typeof glossComponentSchema>;

export type GlossModuleData = z.infer<typeof glossModuleSchema>;

export type GlossConfigData = z.infer<typeof glossConfigSchema>;

export type GlossModeData = z.infer<typeof glossModeSchema>;

export type SetGlossMode = (mode: GlossModeData) => void;

export type GlossFilterOption = {
	label: string;
	value: string;
	href: string;
};
export type GlossFilterGroup = {
	label: string;
	options: GlossFilterOption[];
};
