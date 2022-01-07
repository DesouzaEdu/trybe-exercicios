const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    return names.reduce ((acc, curr)=> {
        return acc + curr.split('').reduce((acc, curr) => {
          if (curr === 'a' || curr === 'A') {
              return acc + 1;
          }
          return acc;
        }, 0);
    }, 0)
  }
