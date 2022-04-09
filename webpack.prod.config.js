const path = require('path');
const webpack = require('webpack');

const {merge} = require('webpack-merge');
const common = require('./webpack.common.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');


const config = {

    mode: 'development',
    

    output: {
        path: path.resolve( __dirname, 'dev'),
        filename: '[name]-[contenthash].js'
    },

    plugins: [
        
    ],

    module: {
        rules: [
            {
                test: /\.(png|svg|hif|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash].ext',
                        outputPath: 'assets/images',
                        esModule: false
                    }
                }
            },
        ]
    }
}


module.exports = merge(common, config)