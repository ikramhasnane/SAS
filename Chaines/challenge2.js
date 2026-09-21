const prompt=require("prompt-sync")();
const n=prompt("Entrer la chaine du caractere : ");
let compteur=0
for(let i=0; i<n.length;i++){
    compteur++;
}
console.log(compteur);



