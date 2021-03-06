// Lista de tecnologias
import React, {Component} from 'react'
import TechItem from './TechItem'

class Techlist extends Component {
  // Todo componente feito no modelo de classe deve ter o método render
    
  /*
    static defaultProps = {
      tech: 'Oculto'
    }
   */

  state = { // variável imutável - setSate() permite alterar o valor
    newTech: '', // Vai armanezar o novo valor, digitado pelo o usuário
    techs: [
    ]
};

// Executado assim que o componente aparece em tela
componentDidMount(){
  // Recuperando techs do localstorage (converter de json para array)
  const techs = localStorage.getItem('techs')

  if (techs){
    this.setState({techs: JSON.parse(techs)})
  }

}

// Executado sempre que houver alterações nas props ou estado
componentDidUpdate(_ /**prevProps */, prevState){
  // Coloco _ pra indicar q só está sendo utilizado o prevState
  //recebe as propriedades antigas e state antigo
  // this.props, this.state 
  if(prevState !== this.state.techs){
    // Verifica se o valor de techs foi alterado
    // localStorage só aceita json, não aceita array
    localStorage.setItem('techs', JSON.stringify(this.state.techs))
  }
}

// Executado quando o componente deixa de existir
componentWillUnmount(){
  // Limpa qualquer tipo de sujeira, caso o o componente deixe algum rastro
  // Muito pouco utilizado

}



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

  handleDelete = (tech) => {
   // console.log(tech)
   this.setState({techs: this.state.techs.filter(t => t !== tech)}) // o state passa a ser as techs diferente da tech q foi passada
  }

  render() {
    return (
      // Retornando um html com mais de uma linha, por isso entre ()
      // <> - substituindo o fragment </> por form
      <form onSubmit={this.handleSubmit}>
      <h1>{this.state.newTech}</h1>
      <ul>
        {this.state.techs.map(tech => (
        // Agora o <li> está em um arquivo separado -> TechItem.js
          <TechItem
            key={tech} 
            tech = {tech} // propriedade
            onDelete = {() => this.handleDelete(tech)} // Passando uma function como propriedade para o componente
          />       
        )
        
        )}
        {/*Passando o próprio item da lista como chave única*/}
        {/* <TechItem /> //Passando sem propriedade */}
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