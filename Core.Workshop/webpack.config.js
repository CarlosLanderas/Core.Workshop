var path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    entry: {
        app: './App/main.ts',
        vendors: ['jquery', 'bootstrap', 'axios', 'underscore']
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: ['node_modules']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 12000,
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.tmpl.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
                test: /\.css$/
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }

        ]
    },

    plugins: [
        new ExtractTextPlugin("site.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors'
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
}


