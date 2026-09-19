const prompt=require ("prompt-sync")();

let n =parseInt(prompt("Entrez un entier positif pour la factorielle:"));

factorielle=1;
for (let i = 1; i <= n; i++)
{
    factorielle = i*factorielle
}
console.log(`${n}=${factorielle}`);