const {resolve} = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        "custom-component": './custom-component.tsx',
        "custom-component.min": './custom-component.tsx'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.scss', '.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: /src/,
                exclude: /node_modules/,
                loader: `awesome-typescript-loader?{configFileName: "${ resolve(__dirname, 'tsconfig.json') }"}`
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "to-string-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            sourceMap: true,
                            localIdentName: '[local]'
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            namedExport: true
                        }
                    }
                ]
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