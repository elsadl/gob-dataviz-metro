<script></script>

<div class="guide">
  <div class="annotations">
    <p>départ →</p>
    <p>arrivée →</p>
  </div>
  <div class="barre-container">
    <div class="barre">
      <span />
      <span />
      <span />
    </div>
  </div>
  <div class="text">
    <p>
      Chaque barre représente le temps de trajet d’un·e étudiant·e pour se
      rendre à l’école ou au travail, et affiche des informations à son sujet au
      survol.
    </p>
    <p>
      Les couleurs signalent la ligne de transport empruntée, et le gris, une
      portion du trajet effectuée à pied, à vélo ou en trottinette.
    </p>
  </div>
</div>

<style>
  .guide {
    max-width: 600px;
    text-align: left;
    padding: 2em 3em;
    background-color: rgba(50, 50, 50, 0.9);
    border-radius: 35px;
    margin-bottom: 1.6em;
    display: flex;
    line-height: 1.6em;
  }

  .guide p + p {
      margin-top: 0.8em;
  }

  .annotations {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0.8em;
    color: #ccc;
    font-size: 0.9em;
  }

  .barre-container {
    margin-right: 3em;
    height: auto;
  }

  .barre {
    height: 100%;
  }

  .barre span {
    width: 10px;
    height: calc(33% - 7.5px);
    background-color: #ccc;
    display: block;
    border-radius: 20px;
  }

  .barre span + span {
    margin-top: 10px;
  }

  .barre span:nth-child(2) {
    background-color: #ff82b4;
  }
</style>
