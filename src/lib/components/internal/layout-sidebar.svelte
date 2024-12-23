<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import File from 'lucide-svelte/icons/file';
	import type { ComponentProps } from 'svelte';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
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
								<a href="/" {...props}>
									<File />
									All Components
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>

					<!-- menu-end -->
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
	<Sidebar.Rail />
</Sidebar.Root>
