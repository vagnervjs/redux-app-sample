const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var extractCSS = new ExtractTextPlugin('main.css');

const prodConfig = {
    entry: './src/index.js',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.(scss|css)$/,
                loader: extractCSS.extract(['css', 'sass?' + 'includePaths[]=' + encodeURIComponent('../src/scss/')])
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        extractCSS
    ]
};

console.log('Webpack - PROD');
module.exports = prodConfig;
