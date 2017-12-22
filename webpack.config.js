var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        main: [
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
    },
    devServer: {
        disableHostCheck: true,
        //contentBase: './src/', // Relative directory for base of server
        hot: true, // Live-reload
        inline: true,
        port: process.env.PORT, // Port Number
        host: '0.0.0.0', // Change to '0.0.0.0' for external facing server
        //historyApiFallback: true,
    },
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
        new webpack.NoErrorsPlugin()
    ]
};
