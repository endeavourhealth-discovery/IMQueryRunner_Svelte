<script lang="ts">
	import type { SearchResultSummary } from '#lib/models/SearchResultSummary.ts';
  import {Button,Popover} from "bits-ui"

  let {
    selected,
    disabled = false,
    searchPlaceholder = "Search",
    setupSearch,
  }:{
    selected?:SearchResultSummary,
    disabled:boolean,
    searchPlaceholder:string,
    setupSearch:Function
    } = $props()
	let searchText = $state('');
	let selectedLocal: SearchResultSummary | undefined = $state(undefined);
  let searchLoading = $state(false);

	function debounceForSearch(event: Event) {
		if (!searchText) {
			selectedLocal = undefined;
		} else if ()
	}

  function select(event:Event) {

  }
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
