<script>
  import { trajetDisplayed } from "../store";

  const displayEcole = () => {
    window.scrollTo(0, 0);
    $trajetDisplayed = "ecole";
  };

  const displayEntreprise = () => {
    $trajetDisplayed = "entreprise";
  };
</script>

<div id="toggle" class={$trajetDisplayed === "ecole" ? "left" : "right"}>
  <p
    on:click={displayEcole}
    class={$trajetDisplayed === "ecole" ? "selected" : ""}
  >
    École
  </p>
  <p
    on:click={displayEntreprise}
    class={$trajetDisplayed === "entreprise" ? "selected" : ""}
  >
    Entreprise
  </p>
</div>

<style>
  #toggle {
    cursor: pointer;
    font-size: 18px;
    display: flex;
    border: 1px solid white;
    background: #000;
    border-radius: 32px;
    padding: 4px;
  }

  #toggle p {
    padding: 10px 18px;
    transition: color 200ms, opacity 200ms;
  }

  #toggle p:not(.selected) {
    opacity: 0.5;
  }

  #toggle p.selected {
    color: #000;
    border-radius: 32px;
    z-index: 2;
  }

  #toggle::before {
    background-color: #fff;
    content: "";
    height: 2.4em;
    position: absolute;
    border-radius: 32px;
    transition: width 200ms, right 400ms;
  }

  #toggle.left::before {
    width: 88px;
    right: 125px;
  }

  #toggle.right::before {
    width: 128px;
    right: 5px;
  }
</style>
