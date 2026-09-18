const prompt=require("prompt-sync")();
let vitesseKmh=Number(prompt("Entrer la vitesse en kilométre par Heure"))
let vitessems=Km * 1093.61
console.log(`la vitesse en métre par seconde est : ${vitessems}`);
