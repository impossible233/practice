const path = require('path')
module.exports = {
    mode: 'development',
    devtool: "eval-source-map",
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        static:{
            directory:path.join(__dirname,"dist") //本地服务器所加载的页面所在的目录
            // inline: true//实时刷新(yi'si)
        },

        historyApiFallback: true,//不跳转

    },
    module:{
        rules:[
            { 			test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            }, ]

    }

}