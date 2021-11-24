<script>
  import { students } from "./students";
  import Trajet from "./Trajet.svelte";

  import { scaleLinear } from "d3-scale";

  let ecole = true;

  let toggleViz = () => {
    ecole = !ecole;
    console.log(ecole);
  };

  //   const scaleEcole = scaleLinear().domain([470, 570]).range([0, 960]);
  const scaleEcole = scaleLinear().domain([0, 600]).range([0, 4000]);
  //   const scaleEntreprise = scaleLinear().domain([500, 660]).range([0, 960]);

  console.log(students);
</script>

<div>
  <p class="toggle" on:click={toggleViz}>Toggle</p>
  {#if ecole}
    <div class="trajets-container">
      {#each students as student}
        <Trajet
          title={student.name}
          scale={scaleEcole}
          trajet={student.ecole.trajet}
          arrivee={student.ecole.arrivee}
        />
      {/each}
    </div>
  {:else}
    <div class="trajets-container">
      {#each students as student}
        <Trajet
          title={student.name}
          scale={scaleEcole}
          trajet={student.entreprise.trajet}
          arrivee={student.entreprise.arrivee}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .toggle {
    z-index: 10;
    cursor: pointer;
  }

  .trajets-container {
    display: flex;
    justify-content: center;
  }
</style>
