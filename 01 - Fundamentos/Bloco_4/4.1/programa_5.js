const angulo1 = 60;
const angulo2 = -60;
const angulo3 = 60;
if(angulo1>0 && angulo2>0 && angulo3>0){
    if(angulo1 + angulo2 + angulo3 == 180){
        console.log("true");
    }else{
        console.log("false");
    }
}else{
    console.log("Todos os 3 angulos devem ser positivos!!");
}