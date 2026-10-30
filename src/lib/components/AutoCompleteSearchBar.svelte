<script lang="ts">
	import type { SearchResponse } from '#lib/models/SearchResponse.ts';
	import type { SearchResultSummary } from '#lib/models/SearchResultSummary.ts';
	import { Button, Popover } from 'bits-ui';

	let {
		selected,
		disabled = false,
		searchPlaceholder = 'Search',
		setupSearch
	}: {
		selected?: SearchResultSummary;
		disabled: boolean;
		searchPlaceholder: string;
		setupSearch: Function;
	} = $props();
	let searchText = $state('');
	let selectedLocal: SearchResultSummary | undefined = $state(undefined);
	let searchLoading = $state(false);
	let popupVisible = $state(false);
	let dialogVisible = $state(false);
	let results: undefined | SearchResponse = $state();
	let searchDebounce: any;

	async function debounceForSearch(event: Event) {
		if (!searchText) {
			selectedLocal = undefined;
		} else if (!searchLoading && searchText != selected?.name) {
			if (searchDebounce) searchDebounce.cancel();
			searchDebounce = debounce(async () => {
				await debounceForSearch(event);
			}, 600);
			searchDebounce();
		}
	}

	async function doSearch(event: any) {
		popupVisible = true;
		results = await search();
	}

	function select(event: Event) {}

	function onEnter(event: Event) {}

	function advancedSearch() {}
</script>

<input
	bind:value={searchText}
	oninput={debounceForSearch}
	onkeydown={(event) => {
		if (event.key === 'Enter') {
			onEnter(event);
		} else {
			select(event);
		}
	}}
	onkeyup={select}
/>
<Button.Root onclick={advancedSearch}>Advanced search</Button.Root>
<Popover.Root bind:open={popupVisible}></Popover.Root>
