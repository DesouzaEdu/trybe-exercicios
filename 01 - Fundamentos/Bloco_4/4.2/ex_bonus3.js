let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = [];

for (let index =0; index < array.length; index += 1) {
    if(array[index+1]>0){
        resultado.push(array[index]*array[index+1]);
    }else{
        resultado.push(array[index]*2);
    } 
  }
  console.log(resultado);

  