// Lista de tecnologias
import React, {Component} from 'react'

class Techlist extends Component {
  // Todo componente feito no modelo de classe deve ter o método render
  state = { // variável imutável - setSate() permite alterar o valor
    newTech: '', // Vai armanezar o novo valor, digitado pelo o usuário
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
};

  handleInputChange = e => {
    // Toda vez que criamos uma função própria dentro de um componente estilo class
    // Deve ser escrita no formato arrow function
    // para ter acesso à variável 'this'
    console.log(e.target.value) // pegando o valor do input
    this.setState({newTech: e.target.value})
  }

  handleSubmit = e => {
    // e -> evento
    // A funcionalidade padrão do envio de um form, é atualizar a página
    e.preventDefault() // Evitando o comportamento padrão

    console.log(this.state.newTech)
    this.setState(
        {
          techs:[...this.state.techs, this.state.newTech],
          newTech:'' // zerando o input
        }
      )

    // Para atualizar o array ou objeto, precisamos refazer o array
    // Crio o array vazio, copio todas as coisa e adiciono como última posição, o newTech
  }

  render() {
    return (
      // Retornando um html com mais de uma linha, por isso entre ()
      // <> - substituindo o fragment </> por form
      <form onSubmit={this.handleSubmit}>
      <h1>{this.state.newTech}</h1>
      <ul>
        {this.state.techs.map(tech => <li key={tech}>{tech}</li>)} {/*Passando o próprio item da lista como chave única*/}
      </ul>

      <input
       type="text"
       onChange={this.handleInputChange} 
       value={this.state.newTech}
        /> 
        {/*onChange = método que é executado quando o input é alterado */}
      
      <button type="submit">Enviar</button> {/*Disparando o submit*/}
      </form >
    );
  }
}

export default Techlist;