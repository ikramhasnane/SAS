const prompt= require ("prompt-sync")();
let distanceKm = Number(prompt("Entez la distance en kilométre:"));
let distanceYards = distanceKm*1093.61
console.log (`la distance en yards est : ${distanceYards}`);


