const devConfig = {
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
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        publicPath: '/dist'
    }
};

console.log('Webpack - DEV');
module.exports = devConfig;
