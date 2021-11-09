let n = 9;
if(n>1){
    if(n%2!==0){
        let asteriscos = "";  
        for(let index = 0; index < n; index+=2){  
            let espacos = "";
            let nEspacos;           
            nEspacos= (n - 1 - index)/2;
            for(let index = 0; index<nEspacos; nEspacos-=1){
                espacos = espacos + " ";
            }    
            asteriscos = asteriscos + "*";        
            console.log(espacos, asteriscos, espacos);   
            asteriscos = asteriscos +"*";        
        }
    }
    else{
        console.log("A base do triangulo deve ser ímpar!");
    }
}