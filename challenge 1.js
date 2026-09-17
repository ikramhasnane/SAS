const prompt=require("prompt-sync")();
let nom = prompt("Quel est votre nom ?");
let prenom = prompt("Quel est votre prénom ?");
let age = prompt("Quel est votre âge ?");
let sexe = prompt("Quel est votre sexe (M/F) ?");
let email = prompt("Quelle est votre adresse e-mail ?")
console.log(`votre nom ${nom}`)
console.log(`votre prénom ${prenom}`)
console.log(`votre age  ${age} ans`)
console.log (`votre sexe  ${sexe}`)
console.log(`votre email  ${email}`)