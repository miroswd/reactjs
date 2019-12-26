import React from 'react'
import {render} from 'react-dom' // Integração do react com o browser, árvore de elementos

import App from './app'

// Render -> responsável por renderizar um código react dentro de um conteúdo no html

//render(<h1>Hello World!</h1>, document.querySelector('div#app'))
render(<App />, document.querySelector("div#app"))
