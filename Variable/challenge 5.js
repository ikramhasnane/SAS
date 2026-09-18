const prompt=require("prompt-sync")();
let C= Number(prompt("Entrer la température en Celicius"));
if (C<0) {console.log("solide")}
else if(C<100){console.log("liquide")}
else if (C >= 100) {console. log("gaz")}

    