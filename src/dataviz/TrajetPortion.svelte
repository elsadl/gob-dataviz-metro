<script>
  import { colors } from "../data/colors";

  export let portion;
  export let scaleTime;

  const color = colors[portion.type][portion.ligne];
  const height = Math.max(scaleTime(portion.duree), 20);
</script>

<div class="portion" style="background-color: {color}; height: {height}px;" />

<style>
  :global(.portion + .portion) {
    margin-top: 10px;
  }

  .portion {
    width: 10px;
    border-radius: 20px;
    mix-blend-mode: multiply;
  }
</style>
