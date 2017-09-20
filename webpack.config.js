const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract( { 
                    fallback: 'style-loader', 
                    use: ['css-loader','sass-loader'] 
                } ) 
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            } 
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "IWTE",
            template: './src/index.html',
            minify: {
                collapseWhitespace: true,
            },
            hash: true
        }),
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        contentBase: "./dist",
        compress: true,
        hot: true,
        open: true
    },
}
