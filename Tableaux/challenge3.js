const prompt= require("prompt-sync")();
let nombre=parseInt(prompt("combien le nombre élément afficher "));

const tableaux=[];
let sum=0;
for(let i=0;i<nombre;i++){
    let valeur=Number(prompt("entrer la valeur de tablaux:"));
    tableaux.push(valeur);
    sum =  sum +tableaux[i];
}
console.log(sum);
