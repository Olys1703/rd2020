const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin ({
      template: './index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      template: './style.css',
      filename: 'style.css',
      //chunkFilename: '[id].css',
      ignoreOrder: false, 
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              esModule: false,
            }
          },
         /* {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          }*/
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: false}
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          /*
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',*/
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' 
        ],
      },
      /*{
        test: /\.json$/,
        use: [
          {
            loader: 'json-loader'
          }
        ]
      }*/
    ]
  },
  
  /*node: {
    fs: "empty"
 },*/
  devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname,'dist'),
      compress: true,
      port: 3000
    }
  };