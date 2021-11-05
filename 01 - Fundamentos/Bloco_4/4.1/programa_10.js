const custo = 100;
const custoTotal = custo*1.2;
const valorVenda = 100;
if(valorVenda>0 && custoTotal>0){
    if(valorVenda>custoTotal){
        console.log("O seu lucro é de:",(valorVenda-custoTotal)*1000);
    }else{
        console.log("O seu prejuízo é de:",(valorVenda-custoTotal)*1000);
    }
}else{
    console.log("Ambos os valores devem ser maiores que 0!");
}