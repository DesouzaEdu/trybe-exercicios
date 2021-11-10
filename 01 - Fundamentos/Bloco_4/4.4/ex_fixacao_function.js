function soma(a,b){
    return a + b;    
}
//console.log(soma(3,1));
function menos(a,b){
    return a-b;
}
//console.log(menos(3,1));
function multiplicacao(a,b){
    return a*b;
}
//console.log(multiplicacao(3,1));
function divisao(a,b){
    return a/b;
}
//console.log(divisao(3,2));
function resto(a,b){
    return a%b;
}
//console.log(resto(3,2));
function maior(a,b){
    if(a>b){
        return console.log("O número a:", a, "é maior!");
    }else if(b>a){
        return console.log("O número b:", b, "é maior!");
    }else{
        return console.log("Os dois números são iguais a:", a);
    }
}
//maior(2,1);

function maior3(a,b,c){
    if(a>b&&a>c){
        return console.log("O número a:", a, "é maior!")
    }else if(b>a && b>c){
        return console.log("O número b:", b, "é maior!")
    }else if(c>a && c>b){
        return console.log("O número c:", c, "é maior!")
    }else{
        return console.log("Não há apenas um número maior!")
    }
}
//maior3(3,5,4);
function valor(valor){
    switch(valor){
        case true:
            return console.log("positive");
            break;
        case false:
            return console.log("negative");
            break;
        default:
            return console.log("zero");
            break;       
            
    }
}
//valor(23);
function triangle(angulo1,angulo2,angulo3){
    if(angulo1>0 && angulo2>0 && angulo3>0){
        if(angulo1 + angulo2 + angulo3 == 180){
            return console.log("true");
        }else{
            return console.log("false");
        }
    }else{
        return console.log("Todos os 3 angulos devem ser positivos!!");
    }
}
//triangle(-70,60,60)
function chess(peca){
    switch(peca.toLowerCase()){
        case "peão":
            return console.log("peão - > 1 casa a frente");
            break;
        case "bispo":
            return console.log("bispo - > diagonais");
            break;
        case "cavalo":
            return console.log("cavalo - > movimento em L");
            break;
        case "torre":
            return console.log("torre - > horizontal e vertical");
            break;
        case "dama":
            return console.log("dama - > todas as direções");
            break;
        case "rei":
            return console.log("rei - > 1 casa em todas as direções");
            break;
        default:
            return console.log("Essa peça não existe, ainda!");
            break;
    }
}
//chess('elefante')
function nota(porcentagem){
    if(porcentagem<0){
        return console.log("A nota não pode ser menor do que 0!");
    }else if(porcentagem<50){
        return console.log("A sua nota é F, tente novamente!");
    }else if(porcentagem<60){
        return console.log("A sua nota é E, tente novamente!");
    }else if(porcentagem<70){
        return  console.log("A sua nota é D, passou de raspão!");
    }else if(porcentagem<80){
        return  console.log("A sua nota é C, voce ficou na média!");
    }else if(porcentagem<90){
        return  console.log("A sua nota é B, bom trabalho!");
    }else if(porcentagem<=100){
        return console.log("A sua nota é A, excelente trabalho!");
    }else{
        return console.log("A nota não pode ser maior do que 100!");
    }
}
//nota(-40)
function par(num1,num2,num3){
    if(num1%2==0 || num2%2==0 || num3%2==0){
        return console.log("true")
    }else{
        return console.log("false")
    }
}
//par(3,5,7)
function impar(num1,num2,num3){
    if(num1%2!==0 || num2%2!==0 || num3%2!==0){
        return console.log("true")
    }else{
        return console.log("false")
    }
}
//impar(3,4,6)
function comercio(valorVenda,custo){
    let custoTotal = custo*1.2;
    if(valorVenda>0 && custoTotal>0){
        if(valorVenda>custoTotal){
            return console.log("O seu lucro é de:",(valorVenda-custoTotal)*1000);
        }else{
            return console.log("O seu prejuízo é de:",(valorVenda-custoTotal)*1000);
        }
    }else{
        return console.log("Ambos os valores devem ser maiores que 0!");
    }
}
//comercio(20,20)
function salarioLiquido(salario){
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
    return console.log("O seu salário líquido é de:", salario-ir);
}
//salarioLiquido(3580)