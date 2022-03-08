var fs = require('fs')
var path = require('path')
var webpack = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader');
var ROOT = path.resolve(__dirname);
var entry = './lib/index.tsx';

module.exports = {
    entry: entry,
    output: {
      path: ROOT + '/dist',
      filename: '[name].bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.ts[x]?$/,
            loader: [
              'awesome-typescript-loader'
            ]
          },
          {
            enforce: 'pre',
            test: /\.ts[x]$/,
            loader: 'source-map-loader'
          }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          '@': ROOT + '/src'
        }
    },
}