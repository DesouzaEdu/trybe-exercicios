import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component{
    render(){
        return conteudos.map((e) => 
        <div key={e.conteudo} className="card">
            <h4>{`O conteudo é: ${e.conteudo}`}</h4>
            <p>{`status: ${e.status}`}</p>
            <p>{`bloco: ${e.bloco}`}</p>
        </div>
        )
    }
}

export default Content;