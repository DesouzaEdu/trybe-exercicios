const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
const [saudacao, funcSaudacao] = saudacoes;
funcSaudacao(saudacao); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring