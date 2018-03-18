const {resolve} = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        "custom-component": './custom-component.js',
        "custom-component.min": './custom-component.js',
        "state": './vanillux/state.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin({
            include: /\.min\.js$/
        })
        // ,new BundleAnalyzerPlugin()
    ]
};