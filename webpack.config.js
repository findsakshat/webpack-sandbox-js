const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Path to HTML template 
      filename: 'index.html', // Output HTML filename
      inject: 'body', // Inject the script tag into the body of the HTML file
    }),
    new CopyWebpackPlugin({ // Copy the 'public' directory to the 'dist' directory
      patterns: [
        {
          from: path.resolve(__dirname, 'public'), // Source directory to copy from
          to: path.resolve(__dirname, 'dist') // Destination directory to copy to
        }
      ]
    })
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