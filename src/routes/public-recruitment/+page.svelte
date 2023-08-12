<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h6 class="border-bottom pb-2 mb-0">公開求人ツール</h6>
<div class="d-flex text-muted pt-3">
  <div class="pb-3 mb-0 small lh-sm w-100">
    {JSON.stringify(data.data)}
  </div>
</div>
