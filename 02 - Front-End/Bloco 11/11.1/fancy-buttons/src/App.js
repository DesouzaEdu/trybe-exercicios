import React from 'react';
import './App.css';
import Button from './Button';
/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick(string) {
  console.log(string)
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return (
     <div>
       <Button event={(e = '1') => handleClick(e)} />
       <Button event={(e = '2') => handleClick(e)} />
       <Button event={(e = '2') => handleClick(e)} />
     </div>
    );
  }
}

export default App;