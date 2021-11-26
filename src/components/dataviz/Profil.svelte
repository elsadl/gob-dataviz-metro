<script>
  import { colors } from "../../data/colors";

  import { trajetDisplayed, wording, lignesClaires } from "../../store";
  import { hoursToMin, calcDureeTrajet, minToHours, getLignes } from "../../utils";

  export let student;

  $: lignes = getLignes(student[$trajetDisplayed].trajet);

  $: timeDepart = minToHours(
    hoursToMin(student[$trajetDisplayed].arrivee) -
      calcDureeTrajet(student[$trajetDisplayed].trajet)
  );
</script>

<div class="card">
  <h1>{student.name}</h1>
  <p class="subtitle">{wording[student.type]}</p>
  <div class="bloc">
    {#if lignes.length > 0}
      {#if lignes.length === 1}
        <p class="subtitle">Ligne empruntée</p>
      {:else}
        <p class="subtitle">Lignes empruntées</p>
      {/if}
      <div class="lignes">
        {#each lignes as ligne}
          <span
            style="background-color: {colors[ligne.type][
              ligne.ligne
            ]}; color: {lignesClaires.includes(ligne.ligne) ? 'black' : ''}"
            >{ligne.ligne}</span
          >
        {/each}
      </div>
    {:else}
      <p class="subtitle">
        {wording[student[$trajetDisplayed].trajet[0].type]}
      </p>
      <div class="lignes">
        <span style="color: black;">-</span>
      </div>
    {/if}
  </div>
  <div class="bloc">
    <p class="subtitle">Temps de trajet</p>
    <p>{calcDureeTrajet(student[$trajetDisplayed].trajet)}'</p>
  </div>
  <div class="bloc">
    <p class="subtitle">Heure de départ</p>
    <p>{timeDepart}</p>
  </div>
</div>

<style>
  .card {
    position: fixed;
    z-index: 10;
    top: 2em;
    right: 3em;
    text-align: right;
  }

  .card h1 {
    font-size: 64px;
    font-weight: bold;
  }

  .card h1 + p.subtitle {
    margin-top: -1em;
    padding-bottom: 1em;
  }

  .card p {
    font-size: 36px;
    font-weight: bold;
  }

  .card p.subtitle {
    font-size: 14px;
    font-weight: 300;
  }

  .bloc + .bloc {
    padding-top: 1em;
  }

  .lignes {
    display: flex;
    justify-content: end;
    padding-top: 0.5em;
  }

  .lignes span {
    height: 40px;
    width: 40px;
    border-radius: 40px;
    display: inline-block;
    mix-blend-mode: screen;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .lignes span + span {
    margin-left: -6px;
  }
</style>
