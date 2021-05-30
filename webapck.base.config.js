'use strict';
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'

function getFilePath(relatedPath) {
    return path.join(__dirname, relatedPath)
}
const fetchPath = getFilePath('./node_modules/whatwg-fetch/fetch.js');
const fetchJsonpPath = getFilePath('./node_modules/fetch-jsonp/build/fetch-jsonp.js')
const momentPath = getFilePath('./node_modules/moment/moment.js')
const APP_INDEX_FILE = getFilePath('./src/index.tsx')
const webpackConfigBase = {
    entry:{
        commons : ['react', 'react-redux', 'react-router-dom', 'immer', 'redux'],
        index : [
            'whatwg-fetch',
            'fetch-jsonp',
            'moment',
            APP_INDEX_FILE
        ]
    },
    output: {
        path: getFilePath('./dist'),
        publicPath: '/',
        filename: devMode ? '[name].libs.js' : '[name].[contenthash].js',
        chunkFilename: devMode ? '[id].chunk.js' : '[id].[contenthash].js'
    },
    context: __dirname,
    resolve: {  
        extensions: ['*', '.less', '.css', '.js', '.tsx', '.ts', '.json'],
        alias: { // 减少使用别名提高编译速速
            '@app': path.join(__dirname, './src'),
            '@': path.join(__dirname, './src'),
            '@datas': path.join(__dirname, './mockdatas'),
            fetch: fetchPath,
            fetchJsonp: fetchJsonpPath,
            moment: momentPath,
            'react-dom': devMode ? '@hot-loader/react-dom' : 'react-dom' // react-hot-loader需要
        },
    },
    optimization: {
        usedExports: true,
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: "all", // 共有三个值可选：initial(初始模块)、async(按需加载模块)和all(全部模块)
            minSize: 30000, // 模块超过30k自动被抽离成公共模块
            minChunks: 1, // 模块被引用>=1次，便分割
            name: false, // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
            automaticNameDelimiter: '~', // 命名分隔符
            cacheGroups: {
                default: { // 模块缓存规则，设置为false，默认缓存组将禁用
                    minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
                    priority: -20, // 优先级
                    reuseExistingChunk: true, // 默认使用已有的模块
                },
                "draft-js": {
                    test: /[\\/]node_modules[\\/]draft-js/,
                    name: 'draft-js',
                    priority: 18,
                    reuseExistingChunk: true,
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    priority: -10, // 确定模块打入的优先级
                    reuseExistingChunk: true, // 使用复用已经存在的模块
                    enforce: true,
                }
            },
        },
    },
    module: {
        // noParse: /lodash/,
        rules: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                include: [getFilePath('./src')],
                use: 'ts-loader'
            },
            {
                test: /\.tsx?$/i,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './css',
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        options: devMode ? {} : {
                            publicPath: './css'
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            esModule: true,
                            modules: {
                                namedExport: true,
                            },
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                sourceMap: true,
                                paths: [getFilePath("./node_modules"), getFilePath("./src")],
                                javascriptEnabled: true,
                                strictMath: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                            modules: {
                                namedExport: true,
                            }
                        }
                    },
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                exclude: /node_modules/,
                include: [getFilePath('./src/assets/images')],
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[hash:4].[ext]',
                    outputPath: './images'
                }
            },
            {
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.(ico|icon)(\?.*)?$/,
                exclude: /node_modules/,
                include: [getFilePath('./src/assets/icons')],
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[hash:4].[ext]',
                    outputPath: './icons'
                }
            },
            {
                test: /\.(woff|eot|ttf|svg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './fonts/[name].[hash:4].[ext]'
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    performance: false,
    plugins: [
        new MiniCssExtractPlugin({
            linkType: 'text/css',
            filename: devMode ? 'css/style.[contenthash].css' : 'css/[name].[contenthash].css',
            chunkFilename: devMode ? 'css/style.[id].css' : 'css/style.[chunkhash].[id].css'
        }),
        new FriendlyErrorsPlugin(),
        new webpack.ProvidePlugin({
            moment: 'moment'
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
}

if (devMode) {
    webpackConfigBase.plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = webpackConfigBase;