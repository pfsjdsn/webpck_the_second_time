let path = require('path')
// 安装html-webpack-plugin   cnpm install html-webpack-plugin --save-dev
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口文件
    entry: './src/index.js',
    output: {
        // 输出文件名称
        filename: "bundle.js",
        // 输出文件路径
        // 绝对路径
        path: path.resolve(__dirname, 'dist')
    },
    // 开发模式 production(生产模式)
    mode: 'development',
    // loader的配置
    module: {
        // 将某个格式的文件进行转换处理
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 以下执行顺序是从下到上
                    // 将js中的样式插入到style标签里
                    "style-loader",
                    // 将css文件转换为js
                    "css-loader"
                ]
            }
        ]
    },
    // plugins插件配置
    // template的内容是：要和入口文件整合的文件
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}