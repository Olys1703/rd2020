const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}


module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin ({
      template: `${PATHS.src}/index.html`,
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      //template: './src/style.css',
      filename: `${PATHS.assets}css/[name].html`,
      //chunkFilename: '[id].css',
      //ignoreOrder: false, 
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
            }
          },
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
          'css-loader',
          'postcss-loader',
          'sass-loader' 
        ],
      },
    ]
  },
  devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname,'dist'),
      compress: true,
      port: 3000
    }
  };