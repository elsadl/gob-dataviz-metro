<script>
  import TrajetPortion from "./TrajetPortion.svelte";

  export let trajet;
</script>

<div class="trajet">
  {#each trajet as portion}
    <TrajetPortion {portion} />
  {/each}
</div>

<style>
    .trajet {
        display: flex;
    }
</style>
