# [Svelte Gloss](https://www.npmjs.com/package/svelte-gloss)

[svelte-gloss](https://www.npmjs.com/package/svelte-gloss)(ary) is a lightweight, context-aware tool to view and share components in isolation. If you've ever tried to spin up a UI story tool like Storybook, you might have found it to be clunky and overkill for your needs. This is where Gloss shines...

Checkout the <a href="https://github.com/OllieJT/gloss/blob/main/CHANGELOG.md">changelog</a> to see what's new.

[![npm](https://img.shields.io/github/v/release/OllieJT/gloss?style=plastic)](https://github.com/OllieJT/gloss/releases) [![npm](https://img.shields.io/npm/dt/svelte-gloss?style=plastic)](https://www.npmjs.com/package/svelte-gloss) [![GitHub last commit (branch)](https://img.shields.io/github/last-commit/OllieJT/gloss/main?style=plastic)](https://github.com/OllieJT/gloss/blob/main/CHANGELOG.md)

---

## Install

```bash
# npm
npm i svelte-gloss@latest

#yarn
yarn add svelte-gloss@latest

#pnpm
pnpm add svelte-gloss@latest
```

## Setup

Create the route for your UI view. We recommend a pathname that won't conflict with your application, like `/__ui__`.

### 1. Create a +layout.svelte file

> [!TIP]
> Recommended route: `/__ui__/+layout.svelte`

```html
<script>
	import { GlossLayout } from 'svelte-gloss';

	let { children } = $props();
</script>

<GlossLayout> {@render children()} </GlossLayout>
```

### 2. Create a root-view +page.svelte file

> [!TIP]
> Recommended route: `/__ui__/+page.svelte`

```html
<script>
	import { GlossPageRoot } from 'svelte-gloss';
</script>

<GlossPageRoot />
```

### 3. Create a detail-view +page.svelte file

You'll need to use route parameters to make use of a detail view. By default, svelte-gloss assumes you're using `id` but you can change this in the config (see below).

Though your route can be a single param like `/__ui__/[id]/+page.svelte`, we recommend spreading your routes to support a wider range of component id values.

> [!TIP]
> Recommended route: `/__ui__/[...id]/+page.svelte`

```html
<script>
	import { GlossPageRoot } from 'svelte-gloss';
</script>

<GlossPageRoot />
```

### 4. Initialize svelte-gloss with a config

You can create your config in a separate file, or in the `+layout.svelte` file you just created. In either case, the config object will need to be passed to the `<GlossLayout>` component.

```ts
/* /__ui__/gloss.ts */
import type { GlossModuleData } from 'svelte-gloss';
import { SvelteGloss } from 'svelte-gloss';

export const gloss = new SvelteGloss({
	// prefix: '/__ui__',
	// parameter: 'id',
});

// import all files from '$lib/**/*.stories.svelte */
const stories = import.meta.glob<boolean, string, GlossModuleData>('$lib/**/*.stories.svelte');

Object.entries(stories).forEach(async ([pathname, story]) => {
	try {
		const component = await story();
		gloss.registerComponent(component);
	} catch (error) {
		// Note: Stories must conform to a specific output.
		// Invalid stories will throw an error.
		console.error(`🚧 Error registering: ${pathname}`, error);
	}
});
```

Pass your config to the `GlossLayout` component.

```html
<script lang="ts">
	import { GlossLayout } from 'svelte-gloss';
	import { gloss } from './gloss';

	let { children } = $props();
</script>

<GlossLayout config="{gloss.config}"> {@render children()} </GlossLayout>
```

### 5. Create a "story"

When creating the config, we shared how you can register all components that match a file pattern like `$lib/**/*.stories.svelte`. So in this example we'll create a story for our button component at `$lib/components/button.stories.svelte`

> [!IMPORTANT]
> Your config must be exported. Remember that we can only export from a module script within a svelte component.

```html
<script lang="ts" module>
	import { GlossWrapComponent, defineGlossComponent } from 'svelte-gloss';

	export const config = defineGlossComponent({
		// This will be passed to the router and used to load this component based on the url.
		id: 'button',

		// A human-readable name for this component
		name: 'Button',

		// A list of groups this component belongs to. It should be included in at least one group.
		groups: ['ShadCN', 'Form'],
	});
</script>

<script lang="ts">
	import MailIcon from 'lucide-svelte/icons/mail';
	import { Button, type ButtonVariant } from './index.js';

	/*
		You can display your component variations however you like.
		Here we are looping over an array of properties.
		You can also define them manually.
	*/

	type Props = {
		variant: ButtonVariant;
		content: string;
		disabled: boolean;
	};

	const variations: Props[] = [
		{ variant: 'default', content: 'Default Button', disabled: false },
		{ variant: 'default', content: 'Disabled Button', disabled: true },
		{ variant: 'highlight', content: 'Highlight Button', disabled: false },
	];
</script>

{#each variations as variation}
<!-- GlossWrapComponent should wrap each of your component variations. -->
<GlossWrapComponent>
	<button variant="{variation.variant}" disabled="{variation.disabled}" onclick="{()" ="">
		alert('clicked')} >
		<MailIcon class="mr-2 size-4" />
		{variation.content}
	</button>
</GlossWrapComponent>
{/each}

<!-- You can also manually define variations. -->
<GlossWrapComponent>
	<button onclick="{()" ="">
		alert('clicked')} size="icon">
		<MailIcon class="mr-2 size-4" />
		<span class="sr-only">Email</span>
	</button>
</GlossWrapComponent>
```

### 6. Setup light/dark mode (Optional)

You can pass the current ui state, and a function to set the ui state directly to the `GlossLayout` component.

```html
<script lang="ts">
	import { mode, setMode } from 'mode-watcher';
	import { GlossLayout } from 'svelte-gloss';
	import { gloss } from './gloss';

	let { children } = $props();
</script>

<GlossLayout
	mode={$mode === 'dark' ? 'dark' : 'light'}
	setMode={(m) => setMode(m)}
	config={gloss.config}
>
	{@render children()}
</GlossLayout>

```

### Done

When you start your dev server, you can visit the route you created. If you followed my recommendations, it will look something like [localhost:5173/\_\_ui\_\_](http://localhost:5173/__ui__)

## Contributing

Contributions are welcome. To avoid rejected pull requests, I recommend you start by opening an [issue](https://github.com/OllieJT/gloss/issues) to discuss your idea.

### Overview

1. Clone this repository
   - Install dependencies with `pnpm`
2. Make changes
   - Check linting with `pnpm check`
   - Run formatting with `pnpm format`
3. Create a changeset with `pnpm changeset`
   - Follow semver for selecting `patch` | `minor` | `major`
   - Include a descriptive note for your changeset
4. Commit your changes
5. Create a pull request back to `OllieJT/svelte-gloss`
