const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack')
var HappyPack = require('happypack');
var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const devPort = 8006;


module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: './src/pages/index/index.tsx'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/'
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin({
      configFile: "./tsconfig.json"
    })],
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    unknownContextCritical: false,
    rules: [
      {
        test: /(\.js(x?)$|\.ts(x?)$)/,
        exclude: /node_modules/,
        use: [
          { loader: 'happypack/loader?id=ts' }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              minimize: false,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]_[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
          ]
        })
      },
      {
        test: /\.css$/,
        use:ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 8192 
        }
      }
    ]
  },
  plugins: [
    new HappyPack({
      id: 'ts',
      threads: 4,
      loaders: [
        { loader: 'babel-loader' },
        {
          path: 'ts-loader',
          query: { happyPackMode: true }
        },
        {
          loader: './preprocess-loader'
        }
      ]
    }),
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: devPort,

    historyApiFallback: true,
    // respond to 404s with index.html
  },
}
