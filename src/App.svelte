<script>
  import { fade } from "svelte/transition";

  import TitleScreen from "./components/TitleScreen.svelte";
  import Guide from "./components/Guide.svelte";
  import Dataviz from "./components/dataviz/Dataviz.svelte";

  let title = true;
  let guide = true;

  setTimeout(() => {
    title = false;
  }, 3000);

  const closeGuide = () => {
    guide = false;
  };

  // setTimeout(() => {
  //   title = false;
  // }, 1600);
</script>

<main>
  {#if title}
    <div transition:fade={{ duration: 600 }}>
      <TitleScreen />
    </div>
  {:else}
    <div transition:fade={{ duration: 600 }}>
      {#if guide}
        <div out:fade={{ duration: 600 }} id="guide">
          <div>
            <Guide />
            <p class="button" on:click={closeGuide}>Voir la visualisation</p>
          </div>
        </div>
      {/if}
      <Dataviz />
    </div>
  {/if}
</main>

<style>
  main {
    width: 100vw;
  }

  #guide {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #guide > div {
    text-align: center;
  }

  .button {
    background-color: #fff;
    color: #000;
    padding: 15px 35px;
    border-radius: 35px;
    font-size: 18px;
    cursor: pointer;
    display: inline-block;
  }
</style>
