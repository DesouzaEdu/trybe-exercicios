let salario = 3500;
let inss;
let ir;
if(salario<=1556.94 && salario>0){
    inss = salario * 0.08;
}else if(salario<=2594.92){
    inss = salario * 0.09;
}else if(salario<=5189.82){
    inss = salario * 0.11;
}else if(salario>5189.82){
    inss = 570.88;
}
salario = salario - inss;
if(salario>1903.98 && salario<2826.66){
    ir = salario *0.075 - 142.8;
}else if(salario<=3751.05){
    ir = salario *0.15 - 354.8;
}else if(salario<=4664.68){
    ir = salario *0.225 - 636.13;
}else if(salario>4664.68){
    ir = salario * 0.275 - 869.36;
}
console.log("O seu salário líquido é de:", salario-ir);