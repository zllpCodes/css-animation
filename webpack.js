const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // webpack入口文件，同目录下的index.js
    entry: {
        index: path.resolve(__dirname, 'src/index.js')
    },
    // 输出路径为dist，输出的文件为index.js
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist/'),
        filename: 'index.js'
    },
    // 开发工具，方便调试
    devtool: 'source-map',
    // 本地服务器，运行服务时，将监听8899端口并自动在浏览器打开
    devServer: {
        contentBase: './',
        inline: true,
        port: 8899,
        open: 'http://localhost:8899/',
        host: '0.0.0.0'
    },
    // 将es6语法的js文件转换为浏览器可以理解的语法
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },
            {
                test: /\.(scss|sass)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `common.css`
        })
    ]
}
