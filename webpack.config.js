'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: ['pixi.js', './src/index.js'],
	output: {
		filename: 'build/game.js'
	},
  resolve: {
    extensions: ["", ".js"]
  },
	module: {
    postLoaders: [
      {
        loader: "transform?brfs"
      }
    ],
		loaders: [
			{
				test: /\.json$/,
				include: path.join(__dirname, 'node_modules', 'pixi.js'),
				loader: 'json',
			},
			{
				test: /\.js$/,
				exclude: path.join(__dirname, 'node_modules'),
				loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-0']
        }
			}
		]
	}
};