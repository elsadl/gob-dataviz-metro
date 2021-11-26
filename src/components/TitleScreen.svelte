<script>
  //   import LogoCouleurs from "./LogoCouleurs.svelte";
</script>

<div id="title-screen">
  <!-- <LogoCouleurs /> -->
  <img src="logoAnimV3.gif" alt="Métrics" />
  <div class="text">
    <p>
      Une visualisation des trajets des BDDI pour se rendre à l'école et au
      travail
    </p>
    <div id="credits">
      <p>Elsa Delmas</p>
      <p>Marie Majou</p>
    </div>
  </div>
</div>

<style>
  #title-screen {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
  }

  #title-screen p {
    padding-top: 2em;
  }

  #title-screen .text {
    z-index: 10;
    position: absolute;
    bottom: 25vh;
  }

  #credits {
    padding-top: 4em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2em;
  }

  #credits p {
    text-align: center;
  }
</style>
