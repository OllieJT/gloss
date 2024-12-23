import type { GlossConfigData } from '$lib/index.js';
import { Context } from 'runed';

export const layoutContext = new Context<GlossConfigData>('gloss-layout');
