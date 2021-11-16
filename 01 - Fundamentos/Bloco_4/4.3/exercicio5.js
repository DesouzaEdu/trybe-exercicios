let n = 7;
let fileira;
if(n>1){
    if(n%2!==0){
       for(let index =0; index<n; index+=2){
           let nEspaco;
           let espaco = "";
           let fileira;
           nEspaco = (n-1)/2;
           if(index==0){
               for(let index = 0; index<nEspaco; index+=1){
                    espaco = espaco + " ";
               }
               console.log(espaco,"*",espaco);
           }else if(index==n-1){               
               let asterisco ="";
               for(let index = 0; index<n; index+=1){
                asterisco = asterisco + "*";
               }
               console.log(asterisco);
           }else{
               let nEspaco2 = (n-fileira-2)/2;               
               let espaco2 = "";
               let espacoM = "";
               for(let index = 0; index<fileira; index +=1){
                espacoM = espacoM + " ";
               }
               for(let index = 0; index<nEspaco2; index+=1){
                   espaco2 = espaco2 + " ";
               }
               console.log(espaco2+"*"+espacoM+"*"+espaco2);
               fileira += 1;
           }
           
       }
    }else{
        console.log("A base do triangulo deve ser ímpar!");
    }
}else{
    console.log("A base do triangulo deve ser maior que 1!");
}