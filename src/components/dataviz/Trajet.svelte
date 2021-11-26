<script>
  import TrajetPortion from "./TrajetPortion.svelte";
  
  import { scale } from "svelte/transition";

  import { studentDisplayed, offset } from "../../store";
  import { hoursToMin, calcDureeTrajet, scaleTime } from "../../utils";

  export let trajet;
  export let arrivee;
  export let student;

  const displayStudent = () => {
    $studentDisplayed = student;
    console.log($studentDisplayed);
  };

  const hideStudent = () => {
    $studentDisplayed = null;
    console.log($studentDisplayed);
  };

  let opacity = 1;

  $: {
    if (!$studentDisplayed) {
      opacity = 1;
    } else {
      if ($studentDisplayed === student) {
        opacity = 1;
      } else {
        opacity = 0.2;
      }
    }
  }

  const timeArrivee = hoursToMin(arrivee);
  const timeDepart = timeArrivee - calcDureeTrajet(trajet);
</script>

<div
  class="trajet"
  transition:scale={{ duration: 1000 }}
  on:mouseenter={displayStudent}
  on:mouseleave={hideStudent}
  style="transform: translateY({scaleTime(timeDepart) -
    offset}px); opacity: {opacity}"
>
  {#each trajet as portion}
    <TrajetPortion {portion} {scaleTime} />
  {/each}
</div>

<style>
  .trajet {
    transition: opacity 400ms;
    height: fit-content;
    cursor: pointer;
    padding: 0 5px 50px 5px;
  }
</style>
