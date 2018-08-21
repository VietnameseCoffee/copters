const path = require('path');

module.exports = {
  context: __dirname,
  entry: './javascript/copters.js',
  output: {
    path: path.resolve(__dirname, 'javascript'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        },
    ]
  },
  devtool: 'source-map'
};
