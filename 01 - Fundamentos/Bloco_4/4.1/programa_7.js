const porcentagem = -110;
if(porcentagem<0){
    console.log("A nota não pode ser menor do que 0!");
}else if(porcentagem<50){
    console.log("A sua nota é F, tente novamente!");
}else if(porcentagem<60){
    console.log("A sua nota é E, tente novamente!");
}else if(porcentagem<70){
    console.log("A sua nota é D, possou de raspão!");
}else if(porcentagem<80){
    console.log("A sua nota é C, voce ficou na média!");
}else if(porcentagem<90){
    console.log("A sua nota é B, bom trabalho!");
}else if(porcentagem<=100){
    console.log("A sua nota é A, excelente trabalho!");
}else{
    console.log("A nota não pode ser maior do que 100!");
}