var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var argv = require('yargs').argv;

const config = {};

// This configured production
if (argv.p) {
    config.entry = [
      './src/client/scripts/index',
      './src/client/scripts/utils/index',
      './src/client/styles/index.scss'
    ]
    config.plugins = [
      new ExtractTextPlugin({
        filename: 'bundle.css',
        allChunks: true
      }),
    ]
}
else {
  config.entry = [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/client/scripts/index',
    './src/client/scripts/utils/index',
    './src/client/styles/index.scss'
  ]
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
      disable: true
    })
  ]
}

module.exports = {
  entry: config.entry,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: (__dirname, 'public')
  },
  plugins: config.plugins,
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['react', ['es2015', { 'modules': false }], 'stage-0'],
              plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
      }
    ]
  }
};
