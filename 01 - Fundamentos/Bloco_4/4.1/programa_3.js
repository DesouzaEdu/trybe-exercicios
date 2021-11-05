const a = 8;
const b = 8;
const c = 8;

if(a>b&&a>c){
    console.log("O número a:", a, "é maior!")
}else if(b>a && b>c){
    console.log("O número b:", b, "é maior!")
}else if(c>a && c>b){
    console.log("O número c:", c, "é maior!")
}else{
    console.log("Não há apenas um número maior!")
}