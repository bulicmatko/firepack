/* eslint-env node */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Webpack Configuration

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const path = require('path');
const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

/**
 *  Webpack Configuration
 */
module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    path: './public/static',
    filename: '[name].js',
    publicPath: '/static/',
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
  },
  plugins: production ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
      __PRODUCTION__: true,
      __DEVELOPMENT__: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
  ] : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __PRODUCTION__: false,
      __DEVELOPMENT__: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel',
        ],
        include: [
          path.resolve(__dirname, './firepack'),
          path.resolve(__dirname, './src'),
        ],
      }, {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'resolve-url',
          'sass?outputStyle=expanded&sourceMap',
        ],
        include: [
          path.resolve(__dirname, './firepack'),
          path.resolve(__dirname, './src'),
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
  },
};
