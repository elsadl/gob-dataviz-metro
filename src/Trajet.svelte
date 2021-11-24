<script>
  import TrajetPortion from "./TrajetPortion.svelte";

  export let trajet;
  export let arrivee;
  export let title;
  export let scale;

  const hoursToMin = (time) => {
    time = time.split("h");
    time = time[0] * 60 + Number(time[1]);
    return time;
  };

  const calcDureeTrajet = (trajet) => {
    let dureeTotale = 0;
    for (let portion of trajet) {
      dureeTotale += portion.duree;
    }
    return dureeTotale;
  };

  const timeArrivee = hoursToMin(arrivee);
  const timeDepart = timeArrivee - calcDureeTrajet(trajet);

  console.log(title);
  console.log({ timeDepart });
  console.log({ timeArrivee });

  console.log(scale(timeDepart));
</script>

<div {title} class="trajet" style="transform: translateY({scale(timeDepart) - 3200}px)">
  {#each trajet as portion, i}
    <TrajetPortion {portion} {scale} index={i} />
  {/each}
</div>

<style>
  :global(.trajet + .trajet) {
    margin-left: 2px;
  }

  .trajet {
    height: fit-content;
  }
</style>
