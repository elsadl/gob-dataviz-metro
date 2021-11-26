<script>
  import Trajet from "./Trajet.svelte";
  import Profil from "./Profil.svelte";
  import Toggle from "../Toggle.svelte";
  import Reperes from "./Reperes.svelte";
  import LogoBW from "../LogoBW.svelte";

  import { students } from "../../data/students";
  import { studentDisplayed, trajetDisplayed } from "../../store";

  const devs = students.filter((student) => student.type === "dev");
  const designers = students.filter((student) => student.type === "des");
</script>

<div id="container">
  <LogoBW />
  {#if $studentDisplayed}
    <Profil student={$studentDisplayed} />
  {/if}
  <Toggle />
  {#if $trajetDisplayed === "ecole"}
    <Reperes hours={[8, 8.5, 9, 9.5]} />
    <div class="trajets-container">
      <div class="students-group">
        {#each devs as student}
          <Trajet
            {student}
            trajet={student.ecole.trajet}
            arrivee={student.ecole.arrivee}
          />
        {/each}
      </div>
      <div class="students-group">
        {#each designers as student}
          <Trajet
            {student}
            trajet={student.ecole.trajet}
            arrivee={student.ecole.arrivee}
          />
        {/each}
      </div>
    </div>
  {:else}
    <Reperes hours={[8, 8.5, 9, 9.5, 10, 10.5, 11]} />
    <div class="trajets-container">
      <div class="students-group">
        {#each devs as student}
          <Trajet
            {student}
            trajet={student.entreprise.trajet}
            arrivee={student.entreprise.arrivee}
          />
        {/each}
      </div>
      <div class="students-group">
        {#each designers as student}
          <Trajet
            {student}
            trajet={student.entreprise.trajet}
            arrivee={student.entreprise.arrivee}
          />
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .trajets-container {
    display: flex;
    justify-content: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .students-group {
    display: flex;
    justify-content: center;
  }

  .students-group + .students-group {
    padding-left: 120px;
  }
</style>
