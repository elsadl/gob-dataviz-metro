<script>
  import { students } from "./students";
  import Trajet from "./Trajet.svelte";

  console.log(students);
</script>

<div>
  {#each students as student}
    <p>{student.name}</p>
    <Trajet trajet={student.ecole.trajet} />
  {/each}
</div>

<style>
</style>
