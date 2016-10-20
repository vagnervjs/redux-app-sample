const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const prodConfig = {
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
};

console.log('Webpack - PROD');
module.exports = Object.assign({}, commonConfig, prodConfig);
