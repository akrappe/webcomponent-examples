const {resolve} = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        "custom-component": './custom-component.ts',
        "custom-component.min": './custom-component.ts'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
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