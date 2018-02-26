const {resolve} = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        "custom-component": './custom-component.js',
        "custom-component.min": './custom-component.js'
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
                test: /\.tsx?$/,
                include: /src/,
                exclude: /node_modules/,
                loader: `awesome-typescript-loader?{configFileName: "${ resolve(__dirname, 'tsconfig.json') }"}`
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