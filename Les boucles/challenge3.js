const prompt= require ("prompt-sync")();
let n = parseInt(prompt(" Entrer un nombre entier naturel positive"));
somme = 0
for (let i = 1; i <= n; i++){   
   let somme= somme+i;
}
console.log(`${n}=${somme}`);