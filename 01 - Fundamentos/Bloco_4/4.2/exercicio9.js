let numbers = [];
let divisao = 0;


for(let index = 1; index < 26; index += 1){
    numbers.push(index);
    divisao = numbers[index-1]/2;
    console.log(divisao);    
}
