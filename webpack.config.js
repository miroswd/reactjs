const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src','index.js'), // Arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'public'),// Destino do bundle(código transpilado pelo webpack)
    filename: 'bundle.js' // Definindo o nome desse arquivo
  },
  devServer: {
    contentBase: path.resolve(__dirname,'public')
  },
  module:{
    rules:[
      // Carregando os loders para transpilar o código
      {
        test: /\.js/, // Expressão regular, entre duas barras, buscando exatamente 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
  
  
};