<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import { Button } from 'bits-ui';

	let { children, data }: LayoutProps = $props();

	function login() {}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Button.Root onclick={login}></Button.Root>

{@render children()}
