<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { GlossModeData, SetGlossMode, GlossConfigData } from '$lib/index.js';
	import File from 'lucide-svelte/icons/file';
	import Moon from 'lucide-svelte/icons/moon';
	import Sun from 'lucide-svelte/icons/sun';
	import type { ComponentProps } from 'svelte';
	import { appSidebarLinks, useSortedSidebarLinks } from './layout-sidebar-links.js';
	import { layoutContext } from '$lib/components/context.js';

	let {
		ref = $bindable(null),
		mode,
		setMode,
		...restProps
	}: ComponentProps<typeof Sidebar.Root> & {
		mode: GlossModeData;
		setMode?: SetGlossMode;
	} = $props();

	const config = layoutContext.get();
	const linkTree = $derived(useSortedSidebarLinks(appSidebarLinks(config.components)));
</script>

<Sidebar.Root bind:ref {...restProps}>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Menu</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					<!-- menu-start -->
					<Sidebar.MenuItem>
						<Sidebar.MenuButton>
							{#snippet child({ props })}
								<a href={config.prefix} {...props}>
									<File />
									All
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>

					{#if setMode}
						<Sidebar.MenuItem onclick={() => setMode('light')}>
							<Sidebar.MenuButton>
								<Sun />
								Light Mode
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>

						<Sidebar.MenuItem onclick={() => setMode('dark')}>
							<Sidebar.MenuButton>
								<Moon />
								Dark Mode
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/if}
					<!-- menu-end -->
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
		{#each linkTree as group, index (index)}
			<Sidebar.Group>
				<Sidebar.GroupLabel>{group.name}</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each group.links as item, index (index)}
							<Sidebar.MenuButton
								isActive={item.config.id === 'button.svelte'}
								class="data-[active=true]:bg-transparent"
							>
								{#snippet child({ props })}
									<a href={item.href} {...props}>
										<File />
										{item.config.name}
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
