// Lista de tecnologias
import React, {Component} from 'react'

class Techlist extends Component {
  // Todo componente feito no modelo de classe deve ter o método render
  state = {
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
};
    render() {
      console.log(this.state.techs[2])
    return (
      // Retornando um html com mais de uma linha, por isso entre ()
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default Techlist;