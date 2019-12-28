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
        test: /\.js$/, // Expressão regular, entre duas barras, buscando exatamente 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'}, // Manda o css pra dentro da <style> do html
          {loader: 'css-loader'} // Entende a importação de outros arquivos (png, css, ...)
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {loader: "file-loader"}
        ]
        /*
          $ -> Pega o contéudo final do nome do arquivo
          ? -> Torna o uso do 'e' opcional
          i -> Case insensitive
        */
      }
    ]
  }
  
  
};
