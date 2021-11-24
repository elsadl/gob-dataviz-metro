<script>
  import { colors } from "./colors";

  export let portion;
  const color = colors[portion.type][portion.ligne];
</script>

<div
  class="portion"
  style="background-color: {color}; width: {portion.duree * 20}px"
/>

<style>
  .portion {
    height: 20px;
    border-radius: 20px;
  }
</style>
