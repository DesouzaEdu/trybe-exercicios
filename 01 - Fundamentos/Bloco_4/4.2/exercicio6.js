let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(let index3 = 0; index3 < numbers.length; index3 += 1){
    if(numbers[index3]%2!==0){
        impar+=1;
    }
}
if(impar>0){
    console.log("Números ímpares: ", impar);
}else{
    console.log("nenhum valor ímpar encontrado");
}
