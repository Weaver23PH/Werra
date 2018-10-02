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
                test: /\.(jpg|png)$/,
                use: ["file-loader"]
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
