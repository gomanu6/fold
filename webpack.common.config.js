const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = {

    entry: {
        main: './src/assets/js/index.js',
    },

    output: {
        clean: true,
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.html',
            chunks: ['main']
        }),
        new MiniCssExtractPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.(s[ac]|c)ss$/i,
                use: [ MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'],
            },

        ]
    }

}


module.exports = config