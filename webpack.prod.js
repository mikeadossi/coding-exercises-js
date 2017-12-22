const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: { // webpack looks for the files to bundle together
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [ // load the modules we'll be using: jsx, node_mod, react-hot ...
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        },
      ]
    },
    plugins: [ // add plugins independent of webpack
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new UglifyJSPlugin()
    ]
};
