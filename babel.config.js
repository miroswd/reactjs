module.exports = {
  presets : [
    "@babel/preset-env", //Responsável por alterar as funcionalidades do js q o navegador não entende
    "@babel/preset-react" // Transforma as coisas que o navegador não entende, do react
  ], // Quais presets do babel serão utilizados
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}