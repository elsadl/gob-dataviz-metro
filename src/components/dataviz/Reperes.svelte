<script>
  import { scaleTime } from "../../utils";
  import { studentDisplayed, offset } from "../../store";

  import { fade } from "svelte/transition";

  export let hours;

  $: opacity = $studentDisplayed ? 0.05 : 0.15;
</script>

<div class="reperes">
  {#each hours as hour}
    <div
      transition:fade={{ duration: 600 }}
      class="repere"
      style="transform: translateY({scaleTime(hour * 60) -
        offset}px); border-bottom: 2px dashed rgba(255, 255, 255, {opacity});"
    >
      {#if Math.round(hour) === hour}
        <p style="opacity: {opacity*2};">{hour}h</p>
      {/if}
    </div>
  {/each}
</div>

<style>
  .reperes {
    position: absolute;
    top: 0;
    left: 0;
  }

  .repere {
    width: 100vw;
    pointer-events: none;
  }

  .repere p {
    position: absolute;
    font-size: 18px;
    transform: translate(0.5em, -1.5em);
  }
</style>
