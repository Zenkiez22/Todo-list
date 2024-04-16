<script>
  import { onMount } from 'svelte';
  import { items } from '../stores';
  import TodoApi from '../TodoApi';
  import Item from './item.svelte';

  function handleNewItem(e) {}

  function handleUpdate(e) {}

  function handleDelete(e) {}

  onMount(async () => {
    // fetch from API
    $items = await TodoApi.getAll();
    // console.log($items);
    // $items = [];
  });
</script>

<div class="list">
  {#each $items as item (item)}
    <Item {...item} />
  {:else}
    <p class="list-status">No Items Exist</p>
  {/each}
</div>

<style>
  .list {
    padding: 15px;
  }

  .list-status {
    margin: 0;
    text-align: center;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1em;
  }
</style>
