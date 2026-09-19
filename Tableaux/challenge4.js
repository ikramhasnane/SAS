const prompt=require("prompt-sync")();
const nombre=parseInt(prompt("Entrer le nombre des élément "));
let tab=[];
for (let i = 0; i < nombre; i++){
    const valeur=parseInt(prompt(`Entrer élément ${i+1} dans un tab`));
    tab.push(valeur);
}
let max=tab[0];
for (let i = 1; i < tab.length; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }
}
console.log(tab);
console.log(max);



