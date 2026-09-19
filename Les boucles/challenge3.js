const prompt= require ("prompt-sync")();
let n = parseInt(prompt(" Entrer un nombre entier naturel positive"));
let somme = 0
for (let i = 1; i <= n; i++){   
   somme= somme+i;
}   
console.log(`${n}=${somme}`);