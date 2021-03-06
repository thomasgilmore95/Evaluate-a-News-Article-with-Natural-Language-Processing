const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const dotenv = require('dotenv')
const {defaults} = require('jest-config');

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new Dotenv()
    ]
}
