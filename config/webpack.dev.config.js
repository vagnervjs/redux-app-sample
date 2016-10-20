const commonConfig = require('./webpack.common');

const devConfig = {
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        publicPath: '/dist'
    }
};

console.log('Webpack - DEV');
module.exports = Object.assign({}, commonConfig, devConfig);
