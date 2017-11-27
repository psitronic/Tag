const path = require('path');

 module.exports = {
     entry: {
		 'build/contentScripts/script': './src/bundler.js'
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
			presets: ['env'],
			plugins: [
				'transform-html-import-to-string',
				'transform-css-import-to-string'
			]
			}
		}]
	}
};