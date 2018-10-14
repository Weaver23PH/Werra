const webpack = require('webpack');

module.exports = {

    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["es2015", "stage-2", "react"] }
                }
            },
            {
                test: /\.scss$/,
                exclude: /\.global.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules:true,
                            localIdentName: "[local]_[hash]"
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.global.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpg|png)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name]_[hash].[ext]"
                        }
                    }
                ]
            }
        ]

    },
    resolve:{
        extensions: ["*", ".js", ".jsx"]
    },
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: __dirname + "/docs",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./docs"
    }
}
