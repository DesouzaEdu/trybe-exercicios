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