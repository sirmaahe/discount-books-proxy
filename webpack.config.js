module.exports = {
    entry: "./public/javascripts/index.js",
    output: {
        path: __dirname + '/dist/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!autoprefixer-loader!less",
                exclude: [/node_modules/]
            },
            {
                test: /\.jsx$/,
                loader: "react-hot!babel",
                exclude: [/node_modules/]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
}