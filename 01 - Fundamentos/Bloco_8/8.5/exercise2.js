const sum = (...arr) => {
    return arr.reduce((contador, atual) => {
        return contador + atual
    });
}
console.log(sum(4, 7, 8, 9, 60, 7));