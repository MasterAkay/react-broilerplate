const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}