export const hoursToMin = (time) => {
  time = time.split("h");
  time = time[0] * 60 + Number(time[1]);
  return time;
};

export const calcDureeTrajet = (trajet) => {
  let dureeTotale = 0;
  for (let i = 0; i < trajet.length; i++) {
    dureeTotale += trajet[i].duree;
    if (i > 0) {
      dureeTotale += 1;
    }
  }
  return dureeTotale;
};

export const minToHours = (time) => {
  let hours = Math.floor(time / 60);
  let mins = time / 60 - hours;
  mins = Math.floor(mins * 60);
  hours = String(hours).padStart(2, "0");
  mins = String(mins).padStart(2, "0");
  return hours + "h" + mins;
};

import { scaleLinear } from "d3-scale";
export const scaleTime = scaleLinear().domain([0, 600]).range([0, 3800]);

export const getLignes = (trajet) => {
  let lignes = [];
  let transports = ["bus", "metro", "tram", "rer"];
  for (let portion of trajet) {
    if (transports.includes(portion.type)) {
      lignes.push({ type: portion.type, ligne: portion.ligne });
    }
  }
  return lignes;
};
