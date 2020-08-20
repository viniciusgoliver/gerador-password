import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      password: '',
      qtdCaracter: 6
    };

    this.gerarPassword = this.gerarPassword.bind(this);    
    this.aumentar = this.aumentar.bind(this);    
    this.diminuir = this.diminuir.bind(this);    
  }

  gerarPassword() {
    let state = this.state
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#.-";
    
    for (let i = 0; i < state.qtdCaracter; i++){      
      text += possible.charAt(Math.floor(Math.random() * possible.length));      
    }     
    state.password = text;    
    this.setState(state);
  }

  aumentar() {
    let state = this.state;
    state.qtdCaracter += 1;

    this.setState(state);
  }

  diminuir() {
    let state = this.state;
    if(state.qtdCaracter === 6){
      alert('Mínimo 6 caracteres');
      return;
    }

    state.qtdCaracter -= 1;

    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Gerador de Password</h1>
        <h3>Password Gerado: {this.state.password}</h3>
        <h4>Quantidade Caracteres: {this.state.qtdCaracter}</h4>        
        <button onClick={this.diminuir}>-</button>        
        <button onClick={this.gerarPassword}>Gerar Password</button>        
        <button onClick={this.aumentar}>+</button>                  
      </div>
    );
  }
}

export default App;