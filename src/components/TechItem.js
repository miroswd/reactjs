// Como não irá manipular nenhuma informação, nem usar o state, pode criar no estilo de function
import React from 'react'
import PropTypes from 'prop-types'

function TechItem(/*props */{tech, onDelete}){
  return (
    <li /*key={tech}* o key deve ficar do lado do techlist*/>
          {/*props.tech -> forma desestruturada -> */tech} 
          <button type="button" onClick={onDelete}>Remover</button> {/*Só vai executar na tech () => */}
      </li>     
  )
}

TechItem.defaultProps = {
  // Só irá ser executado quando a propriedade não recebe nenhuma informação
  tech: 'Oculto'
}

TechItem.propTypes = {
  tech: PropTypes.string, // Propriedade tech é um texto
  onDelete: PropTypes.func.isRequired // A propriedade onDelete é uma função e obrigatória
}

export default TechItem;