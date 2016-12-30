const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

var config = {
   entry: './src/js/main.js',
	
   output: {
      path:'./src/js/',
      filename: 'index.js',
   },

	plugins: [
    new ExtractTextPlugin('src/assets/stylesheets/app.css', { allChunks: true })
   ],

   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass'),
            loaders: ['style', 'css', 'sass']
         }
      ]
   }
}

module.exports = config;