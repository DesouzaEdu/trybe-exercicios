/* Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . */

const criaObjeto = (name) => ({
    nomeCompleto: name, 
    email: `${name}@trybe.com`,
});
const newEmployees = (criaObjeto) => {
    const employees = {
      id1: criaObjeto('Pedro Guerra'),
      id2: criaObjeto('Luiza Drumond'),
      id3: criaObjeto('Carla Paiva'), 
    }
    return employees;
};

console.log(newEmployees(criaObjeto));