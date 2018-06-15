const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
    {
        entry: './src/entry.js',
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'kline.min.js',
            libraryTarget: 'umd',
            umdNamedDefine: true,
        },
        plugins: [
            new BundleAnalyzerPlugin(),
            new UglifyJsPlugin(),
            new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0
            })
        ],
        externals: {
            jquery: {
                commonjs: "jquery",
                commonjs2: 'jquery',
                amd: "jquery",
                root: "$"
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                            plugins: [
                                'transform-class-properties'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                }
            ]
        }
    },
    {
        entry: './src/entry.js',
        devtool: 'source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'kline.js',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        plugins: [
        ],
        externals: {
            jquery: {
                commonjs: "jquery",
                commonjs2: 'jquery',
                amd: "jquery",
                root: "$"
            }
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                            plugins: [
                                'transform-class-properties'
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                },
                {
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                }
            ]
        }
    }
];

