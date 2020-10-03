const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: '/\.(js|vue)$/',
                loader: 'eslint-loader',
                exclude: /[\\/]node_modules[\\/]/,
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader',
                exclude: /[\\/]node_modules[\\/]/,
            },
            {
                test: /\.js$/,
                exclude: /[\\/]node_modules[\\/]/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                exclude: /[\\/]node_modules[\\/]/,
                loader: 'vue-loader',
            },
            {
                test: /\.scss$/,
                exclude: /[\\/]node_modules[\\/]/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
            filename: 'index.html',
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
