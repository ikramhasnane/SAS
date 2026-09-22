const rectangle={
    longueur: 4 ,
    largeur:2 ,
};
function calculAir(rectangle){
    return rectangle.longueur*rectangle.largeur
} 
const air=calculAir(rectangle);
 console.log(air);