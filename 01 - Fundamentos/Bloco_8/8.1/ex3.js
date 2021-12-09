/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem. */
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function auxAlg (correta, checar) {
    if(checar===correta) {
        return 1;        
    } 
    if(checar ==='N.A'){
    return 0;
    }
    return -0.5;
}

function checaRespostas (gabarito, respostas, algoritmo) {
    let count = 0;
    for (i = 0; i < gabarito.length; i += 1){
        count += algoritmo(gabarito[i], respostas[i]);
    }
    return count;
}

console.log(checaRespostas (RIGHT_ANSWERS, STUDENT_ANSWERS, auxAlg));
