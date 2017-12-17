'use strict';
const webpack = require('webpack');
const path = require('path');
const pr = path.resolve;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const classy = require('classy-loader');
classy.init({
    attributeName: 'class',
    extraAttributeName: 'classes',
    globalPrefix: '',//'awesome-example-app',
    delimiter: '-',
    obfuscation: true,
    obfuscatedLength: 4,
    autoPrefixMode: true,
    prefixAutoResolving: 'content' // false | 'content' | 'file' | 'folder'
});


const CONFIG = {
    base: '',
    publicPath: '',
    output: 'dist/bundle.js'
};

const config = {
    entry: [
        pr(__dirname, 'src', 'index.js')
    ],
    output: {
        path: pr(__dirname, 'public'),
        publicPath: CONFIG.publicPath,
        filename: CONFIG.output
    },
    resolve: {
        modules: ['node_modules', 'src']
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: ['node_modules'],

                loaders: [
                    {
                        loader: 'babel-loader',
                        options: {
                            'compact': false,
                            'presets': [
                                'babel-preset-es2015', 
                                'babel-preset-stage-0',
                                'babel-preset-react'
                            ],
                            'plugins': [
                                'babel-plugin-transform-decorators-legacy',
                                'babel-plugin-transform-class-properties',
                            ]
                        }
                    },
                    {
                        loader: 'classy-loader?parser=js'
                    }
                ]
            },
            { 
                test: /\.(ttf|eot|woff(2)?)(\S+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            { 
                test: /\.(jpg|jpeg|gif|svg|png?)(\S+)?$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.s?css$/,
                exclude: ['node_modules'],
                loader: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            'css-loader?root=' + pr(__dirname, 'src'), 
                            'resolve-url-loader', 
                            'sass-loader',
                            'classy-loader?parser=css'
                        ]
                    }
                )
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'GLOBALS': JSON.stringify(CONFIG)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new ExtractTextPlugin('dist/bundle.css')
    ]
};


config.devServer = {
    contentBase: pr(__dirname, 'public'),
    historyApiFallback: true,
    inline: true
};
//config.devtool = 'cheap-module-eval-source-map';

module.exports = config;