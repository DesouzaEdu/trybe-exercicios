import React from "react";

class Button extends React.Component{
    render(){
        return <button onClick ={this.props.event}>Meu Botão</button>
    }
}

export default Button;