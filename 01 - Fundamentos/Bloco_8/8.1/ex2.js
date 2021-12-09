/* Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */
const checar = (sorteado, apostado) => {
    if (sorteado === apostado) {
        return true;
    }
    return false;
}
const resultSort = (aposta, checar) => {
    const sorteado = Math.round(Math.random() * 5);
    console.log(sorteado);
    if(checar(sorteado, aposta)){
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

console.log(resultSort(3,checar));