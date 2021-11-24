<script>
  import { colors } from "./colors";

  export let portion;
  export let scale;
  export let index;

  const color = colors[portion.type][portion.ligne];
  const height = scale(portion.duree);
  const offset = 0;

  console.log(scale(portion.duree));
</script>

<div
  class="portion"
  style="background-color: {color}; height: {height}px; transform: translateY({offset}px)"
/>

<style>
  .portion {
    width: 20px;
    border-radius: 20px;
    mix-blend-mode: color-dodge;
  }
</style>
