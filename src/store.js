import { writable } from "svelte/store";

export const studentDisplayed = writable();
export const trajetDisplayed = writable("ecole");

export const offset = 2950;

export const wording = {
  dev: "Développement",
  des: "Design",
  pied: "À pied",
  trottinette: "En trottinette",
  velo: "À vélo",
  teletravail: "Télétravail",
};

export const lignesClaires = ["1", "3bis", "6", "7bis", "9", "13", "T4", "169", "341"];
