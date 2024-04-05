const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Path to HTML template 
      filename: 'index.html', // Output HTML filename
      inject: 'body', // Inject the script tag into the body of the HTML file
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 3003
  },
  mode: "development"
};