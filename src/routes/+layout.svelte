<script lang="ts">
  import Nav from '$lib/Nav.svelte';
</script>

<Nav />

<main class="container">
  <div class="my-3 p-3 bg-body rounded shadow-sm">
    <slot />
  </div>
</main>
