let n = 3;
if(n>1){
    let asteriscos = "";  
    for(let index = 0; index < n; index+=1){ 
        
        let nespacos = n - index-1; 
        let espacos ="";

        for(let index = 0; index < nespacos; index+=1){
             
             if(nespacos>0){
                espacos = espacos + " ";
            }
        }    
        asteriscos = asteriscos + "*";        
        console.log(espacos, asteriscos);
    }
}