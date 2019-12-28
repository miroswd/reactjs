// Como não irá manipular nenhuma informação, nem usar o state, pode criar no estilo de function
import React from 'react'

function TechItem(/*props */{tech, onDelete}){
  return (
    <li /*key={tech}* o key deve ficar do lado do techlist*/>
          {/*props.tech -> forma desestruturada -> */tech} 
          <button type="button" onClick={onDelete}>Remover</button> {/*Só vai executar na tech () => */}
      </li>     
  )
}

export default TechItem;