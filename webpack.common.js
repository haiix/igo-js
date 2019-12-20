const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/Igo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'igo',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
}