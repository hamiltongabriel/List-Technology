// preset-env funcionalidades que o navegador ainda nao atende
// funcionalidades como jsx
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}
