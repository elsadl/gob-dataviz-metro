<script>
  import Toggle from "./Toggle.svelte";

  import { colors } from "../data/colors";
</script>

<div class="legende">
  <Toggle />
  <div />
</div>

<style>
  .legende {
    position: fixed;
    bottom: 2em;
    right: 4em;
    z-index: 10;
  }
</style>
