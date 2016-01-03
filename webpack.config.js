var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// PostCSS
var autoprefixer = require('autoprefixer');
var postcssUse = require('postcss-use');
var postcssImport = require('postcss-import');
var lost = require('lost');

// Path Config
var pathConfig = {
  context: path.resolve('client'),
  assetsPath: __dirname + '/dist/assets/'
}

// varPlugin takes raw strings and inserts them, so you can put strings of JS if you want.
var varPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});


var config = {
  context: pathConfig.context,
  entry: './index.js',
  output: {
    path: pathConfig.assetsPath,
    publicPath: '/assets/',
    filename: './js/bundle.js'
  },



  devtool: 'eval',

  plugins: [
    new ExtractTextPlugin('./css/styles.css'),
    varPlugin
  ],

  module: {
    loaders: [
      {test: /\.js$/, loader: 'jshint-loader!ng-annotate!babel', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!postcss'),
        exclude: /node_modules/
        },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=/res/[name].[ext]?[hash]'
      }
    ]
  },
  postcss: function (webpack) {
    return [
    postcssImport({
      addDependencyTo: webpack
    }),
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    postcssUse({ modules: [
      'lost'
      ]}),
    ]
  },
  jshint: {
		// any jshint option http://www.jshint.com/docs/options/
		// i. e.
		camelcase: true,

		// jshint errors are displayed by default as warnings
		// set emitErrors to true to display them as errors
		emitErrors: false,

		// jshint to not interrupt the compilation
		// if you want any file with jshint errors to fail
		// set failOnHint to true
		failOnHint: false,

		// custom reporter function
		reporter: function(errors) { }
	}
};

module.exports = config;
